import LoginScreen from './components/LoginScreen/LoginScreen'
import Root from './components/Root/Root'
import SingleNote from './components/SingleNote/SingleNote'
import Notes from './components/Notes/Notes'
import ChangePass from './components/ChangePass/ChangePass'
import Favorite from './components/Favorite/Favorite'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LocalizationContext from './localization/LocalizationContext'
import {useState} from 'react'
import en from './localization/en'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/notes',
        element: <Notes />,
      },
      {
        path: '/favorite',
        element: <Favorite />,
      },
      {
        path: '/password',
        element: <ChangePass />,
      },
      {
        path: '/notes/:id',
        element: <SingleNote />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
])

const App = () => {
  const [locale, setLocale] = useState(en)

  const changeLocale = newLocale => {
    setLocale(newLocale)
  }

  return (
    <LocalizationContext.Provider value={{...locale, changeLocale}}>
      <RouterProvider router={router} />
    </LocalizationContext.Provider>
  )
}
export default App
