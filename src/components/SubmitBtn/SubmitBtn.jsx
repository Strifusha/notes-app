import './SubmitBtn.css'
import {useNavigate} from 'react-router-dom'
import {useLocalization} from '../../localization/LocalizationContext'
import {useAuthContext} from '../../contexts/AuthContext'

function SubmitBtn({userNameInput, userPass}) {
  const context = useAuthContext()
  const {logIn} = useLocalization()
  const navigate = useNavigate()
  const handleNavigation = () => {
    context.setIsAuth(true)
    navigate('/notes')
  }

  const giveEntrance = async () => {
    console.log('name', userNameInput)
    console.log('pass', userPass)

    const url = 'https://dull-pear-haddock-belt.cyclic.app/auth'
    const data = {
      username: userNameInput,
      password: userPass,
    }
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        console.log('json', JSON.stringify(data))
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        handleNavigation()
      })
      .catch(error => {
        console.error('Error during fetch:', error.message)
      })
  }

  return (
    <button type="button" className="submit" onClick={giveEntrance}>
      {logIn}
    </button>
  )
}

export default SubmitBtn
