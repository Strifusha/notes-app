import './SubmitBtn.css'
import {useNavigate} from 'react-router-dom'
import {useLocalization} from '../../localization/LocalizationContext'
import {useAuthContext} from '../../contexts/AuthContext'

function SubmitBtn({userNameInput, hasNums, userPass}) {
  const context = useAuthContext()
  const {logIn} = useLocalization()
  const navigate = useNavigate()
  const handleNavigation = () => {
    context.setIsAuth(true)
    console.log(context.setIsAuth)
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
