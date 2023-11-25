import {useLocalization} from '../../localization/LocalizationContext'
import {Outlet, Link} from 'react-router-dom'
import './Root.css'

const Root = () => {
  const {logOut, allNotes, favorite, changePass} = useLocalization()

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
        <Link to={'/login'} className="navLink">
          {logOut}
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Root
