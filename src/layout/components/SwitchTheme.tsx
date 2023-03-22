import { useCallback, useLayoutEffect } from 'react'
import { PaletteMode } from '@mui/material'
import { SwitchModeInput } from '../../components/SwitchModeInput'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useToggleTheme } from '../../hooks/useToggleTheme'

export function SwitchTheme() {
  const { dispatch } = useToggleTheme()
  const [mode, setMode] = useLocalStorage<PaletteMode>('mode', 'light')

  useLayoutEffect(() => {
    dispatch({ type: 'mode', payload: mode })
  }, [mode])
  const handleMode = useCallback(() => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }, [mode])
  
  
  return (
    <SwitchModeInput onChange={handleMode} checked={mode === 'light' ? false : true} />
  )
}

