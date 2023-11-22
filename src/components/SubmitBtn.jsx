import '../styles/SubmitBtn.css'
import {useNavigate} from 'react-router-dom'
import {useLocalization} from '../localization/LocalizationContext'

function SubmitBtn() {
  const {submit} = useLocalization()
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/notes')
  }

  return (
    <button type="button" className="submit" onClick={handleNavigation}>
      {submit}
    </button>
  )
}

export default SubmitBtn
