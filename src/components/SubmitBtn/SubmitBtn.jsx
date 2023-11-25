import './SubmitBtn.css'
import {useNavigate} from 'react-router-dom'
import {useLocalization} from '../../localization/LocalizationContext'

function SubmitBtn({userNameInput, hasNums, userPass}) {
  const {logIn} = useLocalization()
  const navigate = useNavigate()
  const handleNavigation = () => {
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
