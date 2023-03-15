import axios from 'axios'
import { useEffect, useReducer } from 'react'

interface State<T> {
  data?: T
  loading: boolean
  error?: Error
}
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }
  | { type: 'finally' }


export function useFetch<T>(url: string, id?: string) {

  const initialState = {
    data: undefined,
    loading: true,
    error: undefined,
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
      axios
        .get(`${url}${id ? `/${id}` : ''}`).then(res => dispatch({ type: 'fetched', payload: res.data }))
        .catch(error => dispatch({ type: 'error', payload: error }))
        .finally(() => dispatch({ type: 'finally' }))
    }
    return () => {
      isCancelled = true
    }
  }, [url, id])

  return { data, loading, error }
}