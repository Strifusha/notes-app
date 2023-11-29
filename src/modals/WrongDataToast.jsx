// Toast.js
import {useState, useEffect} from 'react'
import '../styles/WrongDataToast.css'

const Toast = ({onClose}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`toast ${visible ? 'visible' : ''}`}>
      <p>Invalid username or password</p>
    </div>
  )
}

export default Toast
