import { lazy } from 'react'
import {
  Route,
  Routes as Switch
} from 'react-router-dom'
import Notfound from '../components/Notfound'

const Users = lazy(() => import('../pages/Users'))
const Profile = lazy(() => import('../pages/Profile'))

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<Users />} />
      <Route path='/:id' element={<Profile />} />
      <Route path='*' element={<Notfound />} />
    </Switch>
  )
}

export default Routes