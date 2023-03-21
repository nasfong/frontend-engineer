import { Drawer, Theme, useMediaQuery } from '@mui/material'
import { useCallback, useState } from 'react'
import { useToggleTheme } from '../hooks/useToggleTheme'

export function Sidebar() {
  const { menu, dispatch } = useToggleTheme()
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  const handleClose = useCallback(() => {
    dispatch({ type: 'menu', payload: false })
  }, [])

  return (
    <Drawer
      anchor='left'
      open={menu}
      onClose={handleClose}
      variant={matches ? 'persistent' : 'temporary'}
      sx={{
        '& .MuiDrawer-paper': {
          top: matches ? '64px' : '0'
        }
      }}
    >
      menu
    </Drawer >
  )
}