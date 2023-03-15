import { useCallback, useLayoutEffect, useMemo } from 'react'
import { SwitchMode } from '../../components/SwitchMode'
import { useMode } from '../../config/Theme'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const SwitchTheme = () => {
  const { dispatch } = useMode()
  const [mode, setMode] = useLocalStorage<boolean>('mode', false)

  useLayoutEffect(() => {
    dispatch({ type: 'mode', payload: mode })
  }, [])

  const handleMode = useCallback(() => {
    setMode(!mode)
    dispatch({ type: 'mode', payload: !mode })
  }, [mode])


  return (
    <SwitchMode onChange={handleMode} checked={mode} />
  )
}

