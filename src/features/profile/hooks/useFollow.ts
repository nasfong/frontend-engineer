import axios, { Canceler } from 'axios'
import { useCallback, useReducer, useRef, useState } from 'react'
import { FollowProps, UseFollowProps } from '../components/profile.type'

type State = {
  page: number
  url: URL | string,
  showModal: boolean
  follows: FollowProps[]
  loading: boolean
  error?: Error,
}

type Action =
  | { type: 'open', payload: URL | string }
  | { type: 'fetched'; payload: FollowProps[] }
  | { type: 'error'; payload: Error }
  | { type: 'finally' }
  | { type: 'close' }

export const useFollow = (): UseFollowProps => {
  const initialState = {
    page: 1,
    url: '',
    showModal: false,
    follows: [],
    loading: false,
    error: undefined
  }
  const [{ page, url, showModal, follows, loading, error }, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case 'open':
          return {
            ...state,
            url: action.payload,
            loading: true,
            showModal: true,
            error: undefined
          }
        case 'fetched':
          return {
            ...state,
            loading: false,
            follows: [...state.follows, ...action.payload],
            showModal: true,
            page: state.page + 1
          }
        case 'error':
          return {
            ...initialState,
            error: action.payload,
            showModal: false,
          }
        case 'finally':
          return { ...state, loading: false, showModal: true }
        case 'close':
          return { ...state, showModal: false, error: undefined }
        default:
          return state
      }
    }, initialState)

  const observer = useRef() as any

  const handleFollow = useCallback(async (url?: URL | string) => {
    let isCancelled = false
    let cancel: Canceler
    dispatch({ type: 'open', payload: url! })
    if (!isCancelled) {
      await axios
        .get(`${url}`, {
          params: { page: page },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then((res) => {
          dispatch({ type: 'fetched', payload: res.data })
        })
        .catch(error => {
          if (axios.isCancel(error)) return
          dispatch({ type: 'error', payload: error })
        })
        .finally(() => dispatch({ type: 'finally' }))
    }
    return () => {
      cancel()
      isCancelled = true
    }
  }, [page])

  const handleClose = useCallback(() => dispatch({ type: 'close' }), [])

  const pageRef = useCallback((node: any) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        handleFollow(url)
      }
    })
    if (node) observer.current?.observe(node)
  }, [url, page])

  return {
    showModal,
    follows,
    loading,
    error,
    handleFollow,
    handleClose,
    pageRef
  }
}
