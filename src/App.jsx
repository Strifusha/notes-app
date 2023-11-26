import {createBrowserRouter, redirect, RouterProvider} from 'react-router-dom'
import {useState} from 'react'
import LoginScreen from './components/LoginScreen/LoginScreen'
import Notes from './components/Notes/Notes'
import ChangePass from './components/ChangePass/ChangePass'
import Favorite from './components/Favorite/Favorite'
import LocalizationContext from './localization/LocalizationContext'
import en from './localization/en'
import ProtectedRoute from './contexts/ProtectedRoute'
import AuthContext from './contexts/AuthContext'
import NotesContext from './contexts/NotesContext'
import SingleNote from './components/SingleNote/SingleNote'

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
  const [isNote, setIsNote] = useState([
    {
      color: '#7e77fb',
      isPublic: false,
      owner: 'David',
      tags: ['cars', 'fun'],
      text: 'Cars, more than mere machines, embody freedom, adventure, and innovation. They are the vessels of our journeys, the symbols of our aspirations, and the catalysts for connecting people across vast distances. In their design and performance, cars encapsulate the spirit of human ingenuity, propelling us forward into a world of possibilities and endless horizons.',
      title: 'my pation',
    },
    {
      color: '#ef61e1',
      isPublic: false,
      owner: 'Suzan',
      tags: ['poem'],
      text: 'Poetry, an art form distilled into words, serves as a kaleidoscope of human emotions and experiences.',
      title: 'I love poetry!',
    },
    {
      color: '#030dc8',
      isPublic: true,
      owner: 'Peter',
      tags: ['trip', 'summer', 'vacation', 'beach', 'drinks'],
      text: 'The golden sunsets paint the sky with hues of orange and pink, casting a warm glow over the tranquil waters. Seagulls dance in the salty breeze, while palm trees sway to the rhythm of the ocean melody.',
      title: 'hello from Florida!',
    },
    {
      color: '#12bfb1',
      isPublic: true,
      owner: 'Monica',
      tags: ['flowers', 'garden'],
      text: 'Flowers, nature poetry in vibrant hues, silently speak the language of beauty. Each delicate petal and graceful stem tells a tale of life fleeting moments, reminding us to appreciate the ephemeral and find joy in the simplest of blooms. In their diverse forms and fragrances, flowers embody nature artistry, captivating hearts and uplifting spirits.',
      title: 'my flowers',
    },
  ])

  const changeLocale = newLocale => {
    setLocale(newLocale)
  }

  return (
    <NotesContext.Provider value={{isNote, setIsNote}}>
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <LocalizationContext.Provider value={{...locale, changeLocale}}>
          <RouterProvider router={router} />
        </LocalizationContext.Provider>
      </AuthContext.Provider>
    </NotesContext.Provider>
  )
}

export default App
