import './ChangePass.css'
import {useLocalization} from '../../localization/LocalizationContext'
import {useState} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from 'react-toastify'

function ChangePass() {
  const {submit, minLength, newPass, confirm} = useLocalization()
  const [newPassword, setNewPassword] = useState('')
  const [checkPass, setCheckPass] = useState('')

  const handlePasswordChange = () => {
    checkPass.length >= 4 &&
      checkPass == newPassword &&
      toast.success('Password successfully changed', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
  }

  return (
    <div className="pass-overlay">
      <ToastContainer />
      <div className="newPass">
        <input
          type="password"
          className="password"
          placeholder={newPass}
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />
        {newPassword.length < 4 ? (
          <p className="err-pass">{minLength}</p>
        ) : (
          <p className="ok-pass">OK</p>
        )}
        <input
          type="password"
          className="password"
          placeholder={confirm}
          value={checkPass}
          onChange={e => setCheckPass(e.target.value)}
        />
        {checkPass.length >= 4 && checkPass == newPassword && <p className="ok-pass">OK</p>}
        <button type="button" className="submitNewNote" onClick={handlePasswordChange}>
          {submit}
        </button>
      </div>
    </div>
  )
}

export default ChangePass
