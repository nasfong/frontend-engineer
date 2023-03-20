import { Drawer } from '@mui/material'
import { useToggleTheme } from '../hooks/useToggleTheme'

export function Sidebar() {
  const { menu } = useToggleTheme()

  return (
    <Drawer
      anchor='left'
      open={menu}
      // onClose={handleDrwer}
      variant='persistent'
      sx={{
        '& .MuiDrawer-paper': {
          top: '64px'
        }
      }}
    >
      menu
    </Drawer >
  )
}