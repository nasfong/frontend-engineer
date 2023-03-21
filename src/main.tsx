import React from 'react'
import ReactDOM from 'react-dom/client'

//App
import App from './App'
import './assets/styles/global.css'

//Axios
import * as _setup from './config/configs'
import axios from 'axios'
_setup.setupAxios(axios)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App basename={_setup.config.basename} />
)
