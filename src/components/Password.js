import '../styles/Password.css'
import eyeClosed from '../img/eyeClosed.svg'
import eyeOpen from '../img/eyeOpen.svg'
import useState from 'react'

function Password({userPass, setUserPass}) {
  const [showPass, setShowPass] = useState(false)

  return (
    <div className="passWrapper" data-title="min length: 4 characters">
      <label htmlFor="password" className="showPass" onClick={() => setShowPass(!showPass)}>
        <img src={showPass ? eyeOpen : eyeClosed} />
      </label>

      <input
        type={showPass ? 'text' : 'password'}
        className="passwordInput"
        placeholder="password"
        // value={userPass}
        onChange={e => setUserPass(e.target.value)}
      />

      {userPass.length < 4 && <p className="err-pass">Invalid password</p>}
    </div>
  )
}

export default Password
