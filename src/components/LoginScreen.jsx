import {useState} from 'react'
import {useLocalization} from '../localization/LocalizationContext'
import SubmitBtn from './SubmitBtn'
import UserName from './UserName'
import Password from './Password'

import '../styles/LoginScreen.css'

function LoginScreen() {
  const [userNameInput, setUserNameInput] = useState('')
  const [userPass, setUserPass] = useState('')
  const {appName} = useLocalization()

  return (
    <div id="welcome-screen">
      <div id="main-pic"></div>
      <div id="login-screen">
        <h1 className="appName">{appName}</h1>
        <UserName userNameInput={userNameInput} setUserNameInput={setUserNameInput} />
        <Password userPass={userPass} setUserPass={setUserPass} />
        <SubmitBtn />
      </div>
    </div>
  )
}

export default LoginScreen
