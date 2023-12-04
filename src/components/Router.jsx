import {createBrowserRouter, redirect} from 'react-router-dom'
import LoginScreen from './LoginScreen/LoginScreen'
import Notes from './Notes/Notes'
import ChangePass from './ChangePass/ChangePass'
import Favorite from './Favorite/Favorite'
import SingleNote from './SingleNote/SingleNote'
import withAuthCheck from '../contexts/withAuthCheck'

const ProtectedRoute = withAuthCheck(({element}) => element)
const Router = createBrowserRouter([
  {
    path: '/',
    loader() {
      return redirect('/notes')
    },
  },
  {
    path: '/notes',
    element: <ProtectedRoute element={<Notes />} />,
  },
  {
    path: '/favorite',
    element: <ProtectedRoute element={<Favorite />} />,
  },
  {
    path: '/password',
    element: <ProtectedRoute element={<ChangePass />} />,
  },
  {
    path: '/notes/:id',
    element: <ProtectedRoute element={<SingleNote />} />,
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
])

export default Router
