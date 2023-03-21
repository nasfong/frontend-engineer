import axios from 'axios'
import { MutableRefObject, RefObject, useCallback, useEffect, useReducer, useRef } from 'react'

interface State<T> {
  data?: T | any
  loading: boolean
  error?: Error
  page: number
}
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T | any }
  | { type: 'page' }
  | { type: 'error'; payload: Error }
  | { type: 'finally' }


export function useFetchScroll<T>(url: string | URL, id = '') {

  const page_num = 0

  const initialState = {
    data: undefined || [],
    loading: false,
    error: undefined,
    page: page_num
  }

  const reducer = (state: State<T>, action: Action<T>) => {
    switch (action.type) {
      case 'loading':
        return { ...state, loading: true }
      case 'fetched':
        return { ...state, data: [...state.data, ...action.payload] }
      case 'page':
        return { ...state, page: state.page + 5 }
      case 'error':
        return { ...initialState, error: action.payload }
      case 'finally':
        return { ...state, loading: false }
      default:
        return state
    }
  }

  const [{ data, loading, error, page }, dispatch] = useReducer(reducer, initialState)
  const observer = useRef() as MutableRefObject<any>

  //fetch data
  useEffect(() => {
    console.log({ per_page: 5 }, { since: page })
    let isCancelled = false
    dispatch({ type: 'loading' })
    if (!isCancelled) {
      axios
        .get(`${url}${id ? `/${id}` : id}`, {
          params: { per_page: 10, since: page }
        })
        .then(res => dispatch({ type: 'fetched', payload: res.data }))
        .catch(error => dispatch({ type: 'error', payload: error }))
        .finally(() => dispatch({ type: 'finally' }))
    }
    return () => {
      isCancelled = true
    }
  }, [url, id, page])

  const pageRef = useCallback((node: RefObject<HTMLInputElement>) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        dispatch({ type: 'page' })
      }
    })
    if (node) observer.current?.observe(node)
  }, [])

  return { data, loading, error, pageRef }
}