import { AppBar, Toolbar } from '@mui/material'
import { SwitchTheme } from './components'

export function Header() {
  return (
    <AppBar position='fixed' color='primary'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img
          src='logo.png'
          style={{ height: 50 }}
        />
        <SwitchTheme />
      </Toolbar>
    </AppBar>
  )
}
