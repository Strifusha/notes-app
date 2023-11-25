import {useState} from 'react'
import {useLocalization} from '../../localization/LocalizationContext'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import UserName from '../UserName/UserName'
import Password from '../Password/Password'

import './LoginScreen.css'

function LoginScreen() {
  const [userNameInput, setUserNameInput] = useState('')
  const [userPass, setUserPass] = useState('')
  const {appName} = useLocalization()
  const hasNums = str => /\d/.test(str)

  return (
    <div id="welcome-screen">
      <div id="main-pic"></div>
      <div id="login-screen">
        <h1 className="appName">{appName}</h1>
        <UserName
          userNameInput={userNameInput}
          setUserNameInput={setUserNameInput}
          hasNums={hasNums}
        />
        <Password userPass={userPass} setUserPass={setUserPass} />
        <SubmitBtn userNameInput={userNameInput} hasNums={hasNums} userPass={userPass} />
      </div>
    </div>
  )
}

export default LoginScreen
