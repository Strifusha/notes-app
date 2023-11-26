import AuthContext from './AuthContext'
import {useContext} from 'react'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = element => {
  const {isAuth} = useContext(AuthContext)
  return isAuth ? element : <Navigate to="/login" />
}

export default ProtectedRoute
