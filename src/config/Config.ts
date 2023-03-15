import { Axios } from 'axios'

export function setupAxios(axios: Axios): void {
  axios.defaults.baseURL = import.meta.env.VITE_REACT_API
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  axios.defaults.headers.post['Accept'] = 'application/json'
}
