import { BrowserRouter } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Routes from './routes/Routes'
import MainLayout from './layout/MainLayout'
import { useMode } from './config/Theme'

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <Routes />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter >
  )
}

export default App
