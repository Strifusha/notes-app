import LoginScreen from './components/LoginScreen'
import Notes from './components/Notes'
import {useState} from 'react'
import en from './localization/en'
import LocalizationContext from './localization/LocalizationContext'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  const [locale, setLocale] = useState(en)

  const changeLocale = newLocale => {
    setLocale(newLocale)
  }

  return (
    <Router>
      <LocalizationContext.Provider value={{...locale, changeLocale}}>
        <div className="App">
          <Routes>
            <Route path="/notes" element={<Notes />} />
            <Route path="/" element={<LoginScreen />} />
          </Routes>
        </div>
      </LocalizationContext.Provider>
    </Router>
  )
}

export default App
