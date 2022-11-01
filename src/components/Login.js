import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

export const Login = () => {
  const [user, setUser] = useState('')
  

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/profile'

  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, { replace: true })
  }
  return (
    <div>
      <label>
        Username:{' '}
        <input type='text' onChange={(e) => setUser(e.target.value)} />
      </label>
     
      <button onClick={handleLogin}>Login </button>

      <h2 className='mt-3'>
        To access the profile page, You will have to Login first
      </h2>
    </div>
  )
}
