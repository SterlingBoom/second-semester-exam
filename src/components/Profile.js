import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
 import { Helmet } from 'react-helmet-async'

export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <>
      <Helmet>
        <title>profile page</title>
        <meta name='description' content='profile' />
        <link rel='canonical' href='/Profile' />
      </Helmet>

      <div>
        <h1 className='welcome-style'>Welcome {auth.user}</h1>
        <h3 className='profile'>YOU HAVE A PROFILE HERE NOW</h3>
        <button className='btn style' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  )
}
