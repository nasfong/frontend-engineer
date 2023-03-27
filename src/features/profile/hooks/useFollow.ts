import axios, { Canceler } from 'axios'
import { MutableRefObject, RefObject, useCallback, useReducer, useRef, useState } from 'react'
import { FollowType, UseFollowProps } from '../components/profile.type'

type State = {
  page: number
  url: URL | string,
  showModal: boolean
  follows: FollowType[]
  loading: boolean
  error?: Error,
}

type Action =
  | { type: 'open', payload: URL | string }
  | { type: 'fetched'; payload: FollowType[] }
  | { type: 'error'; payload: Error }
  | { type: 'stop' }
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
        case 'stop':
          return {
            ...state, page: 0
          }
        case 'error':
          return {
            ...initialState,
            error: action.payload,
            showModal: false,
          }
        case 'finally':
          return { ...state, loading: false }
        case 'close':
          return { ...initialState }
        default:
          return state
      }
    }, initialState)

  const observer = useRef(null) as MutableRefObject<IntersectionObserver | null>

  const handleFollow = useCallback(async (url?: URL | string) => {
    let isCancelled = false
    let cancel: Canceler
    dispatch({ type: 'open', payload: url! })
    if (!isCancelled) {
      await axios
        .get(`${url}`, {
          params: { page: page },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => res.data.length ?
          dispatch({ type: 'fetched', payload: res.data })
          :
          dispatch({ type: 'stop' })
        )
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

  const pageRef = useCallback((node: HTMLElement) => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && page && follows.length >= 30) {
        handleFollow(url)
      }
    })
    if (node) observer.current?.observe(node)
  }, [loading, url, page])

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
