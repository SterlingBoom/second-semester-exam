//restriction for Routes that should be access only when Authenticated
import { useAuth } from '../App'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const RestrictedRoute = ({ children }) => {
  const { name } = useAuth()
  const location = useLocation()
  if (!name) {
    return <Navigate to='/home' replace state={{ from: location }} />
  }

  return children
}

export default RestrictedRoute
