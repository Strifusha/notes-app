import './SubmitBtn.css'
import {useNavigate} from 'react-router-dom'
import {useAuthContext} from '../../contexts/AuthContext'
import {useState} from 'react'
import WrongDataToast from '../../modals/WrongDataToast'

function SubmitBtn({userNameInput, userPass}) {
  const [loading, setLoading] = useState(false)
  const [invalidData, setInvalidData] = useState(false)
  const context = useAuthContext()
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/notes')
    context.setIsAuth(true)
  }

  const giveEntranceWithDelay = () => {
    if (userPass.length < 4 || userNameInput.length < 4) return
    setLoading(true)
    setTimeout(() => {
      giveEntrance()
    }, 1500)
  }

  const giveEntrance = async () => {
    const url = 'https://dull-pear-haddock-belt.cyclic.app/auth'
    const data = {
      username: userNameInput,
      password: userPass,
    }
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          setInvalidData(true)
          throw new Error('Invalid Password or Login!')
        }
        return response.json()
      })
      .then(data => {
        const token = data.token
        localStorage.setItem('authToken', token)
        handleNavigation()
      })
      .catch(error => {
        console.error('Error during fetch:', error.message)
      })
      .finally(setLoading(false))
  }

  const handleCloseToast = () => {
    setInvalidData(false)
  }

  return (
    <div className="btn-container">
      {!loading ? (
        <button
          type="button"
          className={`submit loading-button ${loading ? 'loading' : ''}`}
          onClick={giveEntranceWithDelay}>
          Log in
        </button>
      ) : (
        <div className="loading-spinner"></div>
      )}
      {invalidData && <WrongDataToast onClose={handleCloseToast} />}
    </div>
  )
}

export default SubmitBtn
