import { Axios } from 'axios'
import { darkScrollbar, PaletteMode } from '@mui/material'
import { grey } from '@mui/material/colors'

export function setupAxios(axios: Axios): void {
  axios.defaults.baseURL = import.meta.env.VITE_REACT_API
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.headers.post['Accept'] = 'application/json'
}

export const config = {
  basename: ''
}

export const getDesignTokens = (mode: PaletteMode) => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...darkScrollbar(
            mode === 'light'
              ? {
                track: grey[200],
                thumb: grey[400],
                active: grey[400]
              }
              : undefined
          ),
          //scrollbarWidth for Firefox  
          scrollbarWidth: 'thin'
        }
      }
    }
  },
  palette: {
    mode: mode,
    primary: {
      main: '#1976d2',
    },
    common: {
      white: '#1976d2'
    }
  }
})
