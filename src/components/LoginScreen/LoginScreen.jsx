import {useState, useEffect} from 'react'
import {useLocalization} from '../../localization/LocalizationContext'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import UserName from '../UserName/UserName'
import Password from '../Password/Password'
import './LoginScreen.css'
import {useNavigate} from 'react-router-dom'

function LoginScreen() {
  const [userNameInput, setUserNameInput] = useState('')
  const [userPass, setUserPass] = useState('')
  const {appName} = useLocalization()
  const navigate = useNavigate()
  const storedToken = localStorage.getItem('authToken')

  useEffect(() => {
    storedToken && navigate('/notes')
  }, [storedToken, navigate])

  return (
    <div id="welcome-screen">
      <div id="main-pic"></div>
      <div id="login-screen">
        <h1 className="appName">{appName}</h1>
        <UserName userNameInput={userNameInput} setUserNameInput={setUserNameInput} />
        <Password userPass={userPass} setUserPass={setUserPass} />
        <SubmitBtn userNameInput={userNameInput} userPass={userPass} />
      </div>
    </div>
  )
}

export default LoginScreen
