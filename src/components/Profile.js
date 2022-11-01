import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <div>
      <h1 className='welcome-style'>Welcome {auth.user}</h1>
      <h3 className='profile'>YOU HAVE A PROFILE HERE NOW</h3>
      <button className='btn style' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
