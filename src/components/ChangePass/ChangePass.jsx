import './ChangePass.css'
import {useLocalization} from '../../localization/LocalizationContext'
import {useState} from 'react'
import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from 'react-toastify'
import NavigationBar from '../NavigationBar/NavigationBar'

function ChangePass() {
  const {submit, minLength, newPass, confirm} = useLocalization()
  const [newPassword, setNewPassword] = useState('')
  const [checkPass, setCheckPass] = useState('')

  const SubmitChangePassword = () => {
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

  const handlePasswordChange = () => {
    const token = localStorage.getItem('authToken')
    const url = 'https://dull-pear-haddock-belt.cyclic.app/auth'
    const data = {
      password: newPassword,
    }
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          console.log('err', response)
          throw new Error('Your Password is not changed!')
        }
        return response.text()
      })
      .then(responseData => {
        console.log('Password changed successfully', responseData)
        SubmitChangePassword()
      })
      .catch(error => {
        console.error('Error during fetch:', error.message)
      })
  }

  return (
    <div>
      <NavigationBar />
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
          {newPassword.length < 4 && <p className="err-pass">{minLength}</p>}
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
    </div>
  )
}

export default ChangePass
