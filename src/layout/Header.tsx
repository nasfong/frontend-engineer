import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, CardMedia, IconButton, Toolbar } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { SwitchTheme } from './components'
import LogoImage from '/logo.png'
import { useToggleTheme } from '../hooks/useToggleTheme'

export function Header() {
  const { dispatch } = useToggleTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(!open)
    dispatch({ type: 'menu', payload: !open })
  }

  return (
    <AppBar position='fixed' color='inherit'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        // sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Link to='/'>
          <CardMedia
            component='img'
            sx={{ height: 50 }}
            image={LogoImage}
            alt='Live from space album cover'
          />
        </Link>
        <SwitchTheme />
      </Toolbar>
    </AppBar>
  )
}
