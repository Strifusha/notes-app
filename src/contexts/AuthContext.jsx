import {createContext, useContext} from 'react'

const AuthContext = createContext({
  isAuth: false,
  setIsAuth: () => {},
})

export const useAuthContext = () => useContext(AuthContext)

export default AuthContext
