import './SubmitBtn.css'
import {useNavigate} from 'react-router-dom'
import {useLocalization} from '../../localization/LocalizationContext'
import {useContext} from 'react'
import AuthContext from '../../contexts/AuthContext'

function SubmitBtn({userNameInput, hasNums, userPass}) {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const {logIn} = useLocalization()
  const navigate = useNavigate()
  const handleNavigation = () => {
    if (!isAuth) setIsAuth(true)
    navigate('/notes')
  }

  const giveEntrance = () => {
    if (!hasNums(userNameInput) || userPass.length < 4) {
      return
    } else {
      handleNavigation()
    }
  }

  return (
    <button type="button" className="submit" onClick={giveEntrance}>
      {logIn}
    </button>
  )
}

export default SubmitBtn
