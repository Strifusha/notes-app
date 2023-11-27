import './Password.css'
import eyeClosed from '../../img/eyeClosed.png'
import eyeOpen from '../../img/eyeOpen.png'
import {useState} from 'react'
import {useLocalization} from '../../localization/LocalizationContext'

function Password({userPass, setUserPass}) {
  const [showPass, setShowPass] = useState(false)
  const {minLength, password, invalPass} = useLocalization()

  return (
    <div className="passWrapper" data-title={minLength}>
      <label htmlFor="password" className="showPass" onClick={() => setShowPass(!showPass)}>
        <img src={showPass ? eyeOpen : eyeClosed} />
      </label>

      <input
        type={showPass ? 'text' : 'password'}
        className="passwordInput"
        placeholder={password}
        onChange={e => setUserPass(e.target.value)}
      />

      {userPass.length < 4 && <p className="err-pass">{invalPass}</p>}
    </div>
  )
}

export default Password
