import {useLocalization} from '../../localization/LocalizationContext'
import {Outlet, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './NavigationBar.css'

const NavigationBar = () => {
  const {logOut, allNotes, favorite, changePass} = useLocalization()
  const navigate = useNavigate()
  const handleNavigation = () => {
    localStorage.removeItem('authToken')
    navigate('/login')
  }
  return (
    <div>
      <div className="navBar">
        <Link to={'/notes'} className="navLink">
          {allNotes}
        </Link>
        <Link to={'/favorite'} className="navLink">
          {favorite}
        </Link>
        <Link to={'/password'} className="navLink">
          {changePass}
        </Link>
        <span className="navLink" onClick={handleNavigation}>
          {logOut}
        </span>
      </div>
      <Outlet />
    </div>
  )
}

export default NavigationBar
