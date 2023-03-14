import ReactDOM from 'react-dom/client'

import './assets/styles/global.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './components'

import App from './App'

//Axios
import * as _setup from './config/Config'
import axios from 'axios'
_setup.setupAxios(axios)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  // </React.StrictMode>,
)
