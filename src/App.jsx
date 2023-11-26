import {createBrowserRouter, redirect, RouterProvider} from 'react-router-dom'
import {useState} from 'react'
import LoginScreen from './components/LoginScreen/LoginScreen'
import SingleNote from './components/SingleNote/SingleNote'
import Notes from './components/Notes/Notes'
import ChangePass from './components/ChangePass/ChangePass'
import Favorite from './components/Favorite/Favorite'
import LocalizationContext from './localization/LocalizationContext'
import en from './localization/en'
import ProtectedRoute from './contexts/ProtectedRoute'
import AuthContext from './contexts/AuthContext'

const router = createBrowserRouter([
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

const App = () => {
  const [locale, setLocale] = useState(en)
  const [isAuth, setIsAuth] = useState(false)

  const changeLocale = newLocale => {
    setLocale(newLocale)
  }

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <LocalizationContext.Provider value={{...locale, changeLocale}}>
        <RouterProvider router={router} />
      </LocalizationContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
