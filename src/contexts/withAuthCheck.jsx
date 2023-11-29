import {Navigate} from 'react-router-dom'

const withAuthCheck = WrappedComponent => {
  const WrappedWithAuthCheck = props => {
    const storedToken = localStorage.getItem('authToken')
    if (!storedToken) {
      return <Navigate to="/login" />
    }
    return <WrappedComponent {...props} />
  }
  WrappedWithAuthCheck.displayName = `withAuthCheck(${getDisplayName(WrappedComponent)})`
  return WrappedWithAuthCheck
}
const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default withAuthCheck
