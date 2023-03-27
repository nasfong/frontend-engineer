import axios from 'axios'
import { useCallback, useEffect, useReducer } from 'react'

interface State<T> {
  data?: T
  loading: boolean
  error?: Error
  value: any
}
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }
  | { type: 'finally' }
  | { type: 'delete'; payload: T[] | any }
  | { type: 'edit'; payload: T[] | any }


export function useFetch2<T>(url: string | URL, id = '') {

  const initialState = {
    data: undefined,
    loading: false,
    error: undefined,
    value: undefined,
  }

  const reducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, loading: true }
      case 'fetched':
        return { ...initialState, data: action.payload }
      case 'error':
        return { ...initialState, error: action.payload }
      case 'finally':
        return { ...state, loading: false }
      case 'delete':
        return { ...state, data: action.payload }
      case 'edit':
        return { ...state, value: action.payload }
      default:
        return state
    }
  }

  const [{ data, loading, error, value }, dispatch] = useReducer(reducer, initialState)

  //fetch data
  useEffect(() => {
    let isCancelled = false
    dispatch({ type: 'loading' })
    if (!isCancelled) {
      axios
        .get(`${url}${id ? `/${id}` : id}`, { params: { per_page: 100 } })
        .then(res => dispatch({ type: 'fetched', payload: res.data.data }))
        .catch(error => dispatch({ type: 'error', payload: error }))
        .finally(() => dispatch({ type: 'finally' }))
    }
    return () => {
      isCancelled = true
    }
  }, [url, id])

  const handleDelete = useCallback(async (_id: string) => {
    await axios
      .delete(`/${url}/${_id}`)
      .then(() => Array.isArray(data) && dispatch({ type: 'delete', payload: data.filter((item) => item._id !== _id) }))
      .catch(error => dispatch({ type: 'error', payload: error }))
  }, [url, data])

  const handleEdit = useCallback(async (formInput: any) => {
    dispatch({ type: 'edit', payload: formInput })
  }, [value])

  const handleSubmit = useCallback(async (e: React.SyntheticEvent) => {
    e.preventDefault()
    await axios
      .put(`/todo/${value._id}`, value)
      .then((resp) => {
        if (resp.status === 200) {
          console.log(resp.data.data)
        } else if (resp.status === 201) {
        }
      })
      .catch(error => console.log(error.message))
  }, [value])

  const handleChange = useCallback(() => {

  },[])

  return { data, loading, error, handleDelete, handleEdit, handleSubmit, value, handleChange }
}