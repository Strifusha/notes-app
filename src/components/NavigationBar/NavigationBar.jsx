import {useLocalization} from '../../localization/LocalizationContext'
import {Outlet, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './NavigationBar.css'
import {useDispatch} from 'react-redux'

const NavigationBar = () => {
  const {logOut, allNotes, favorite, changePass} = useLocalization()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNavigation = () => {
    localStorage.removeItem('authToken')
    dispatch({
      type: 'RESET_NOTES',
    })
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
