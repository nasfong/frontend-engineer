import { lazy } from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import Notfound from '../components/Notfound'
import MainLayout from '../layout/MainLayout'

const Users = lazy(() => import('../pages/Users'))
const Profile = lazy(() => import('../pages/Profile'))
const TodoList = lazy(() => import('../pages/TodoList'))

const MainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <Users />
    },
    {
      path: ':id',
      element: <Profile />
    },
    {
      path: 'todo',
      element: <TodoList />
    },

    //Error
    {
      path: '*',
      element: <Navigate to="/notfound/404" replace />
    },
    {
      path: '/notfound/404',
      element: <Notfound />
    },
  ]
}

export default function Routes() {
  return useRoutes([MainRoutes])
}