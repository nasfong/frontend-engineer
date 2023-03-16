import { BrowserRouter } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Routes from './routes/Routes'
import MainLayout from './layout/MainLayout'
import { useMode } from './config/Theme'
import { Suspense } from 'react'
import Loading from './components/Loading'

function App() {
  const { mode } = useMode()

  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      common: {
        white: '#1976d2'
      }
    }
  })
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Routes />
          </MainLayout>
        </ThemeProvider>
      </BrowserRouter >
    </Suspense>

  )
}

export default App
