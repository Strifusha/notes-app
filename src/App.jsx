import {RouterProvider} from 'react-router-dom'
import {useState} from 'react'
import LocalizationContext from './localization/LocalizationContext'
import en from './localization/en'
import AuthContext from './contexts/AuthContext'
import Router from './components/Router'

const App = () => {
  const [locale, setLocale] = useState(en)
  const [isAuth, setIsAuth] = useState(false)

  const changeLocale = newLocale => {
    setLocale(newLocale)
  }

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <LocalizationContext.Provider value={{...locale, changeLocale}}>
        <RouterProvider router={Router} />
      </LocalizationContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
