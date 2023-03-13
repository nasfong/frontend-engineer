import axios from 'axios'
import { useCallback, useEffect, useMemo, useReducer } from 'react'
import { UsersProps } from '../features/users'

interface State<T> {
  data?: T
  loading?: boolean
  error?: Error
  search: string
}
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }
  | { type: 'finally' }
  | { type: 'search'; payload: string }


export function useFetch<T>(url: string, id?: string) {

  const initialState = {
    data: undefined,
    datas: undefined,
    loading: true,
    error: undefined,
    search: ''
  }

  const reducer = (state: State<T>, action: Action<T>) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState }
      case 'fetched':
        return { ...initialState, data: action.payload }
      case 'error':
        return { ...initialState, error: action.payload }
      case 'finally':
        return { ...state, loading: false }
      case 'search':
        return { ...state, search: action.payload }
      default:
        return state
    }
  }

  const [{ data, loading, error }, dispatch] = useReducer(reducer, initialState)

  //fetch data
  useEffect(() => {
    let isCancelled = false
    dispatch({ type: 'loading' })
    if (!isCancelled) {
      if (id) {
        axios
          .get(`${url}${id ? `${id}` : ''}`).then(res => dispatch({ type: 'fetched', payload: res.data }))
          .catch(error => dispatch({ type: 'error', payload: error }))
          .finally(() => dispatch({ type: 'finally' }))
        return
      }
      axios
        .get(`${url}`).then(res => dispatch({ type: 'fetched', payload: res.data }))
        .catch(error => dispatch({ type: 'error', payload: error }))
        .finally(() => dispatch({ type: 'finally' }))
    }
    return () => {
      isCancelled = true
    }
  }, [url])



  return { data, loading, error }
}