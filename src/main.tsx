import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'

//App
import App from './App'
import Loading from './components/Loading'

//Axios
import * as _setup from './config/Config'
import axios from 'axios'
import React, { Suspense } from 'react'
import { DataProvider } from './config/Theme'
_setup.setupAxios(axios)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <DataProvider>
        <App />
      </DataProvider>
    </Suspense>
  </React.StrictMode>,
)
