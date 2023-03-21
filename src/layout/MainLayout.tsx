import { useMemo } from 'react'
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { getDesignTokens } from '../config/configs'
import { useToggleTheme } from '../hooks/useToggleTheme'
import { ScrollTop } from './components'
import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export default function MainLayout() {
  const { mode } = useToggleTheme()

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollTop>
        <Header />
        <Sidebar />
        <Container sx={{ paddingY: 10 }}>
          <Outlet />
        </Container>
        <Footer />
      </ScrollTop>
    </ThemeProvider>


  )
}

