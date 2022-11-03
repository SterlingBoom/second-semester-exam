import { createContext, useContext, useState } from 'react'
import {Helmet} from 'react-helmet-async'
const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const login = (user) => {
    setUser(user)
  }
  const logout = () => {
    setUser(null)
  }
  return (
    <>
      <Helmet>
        <title>Authentication page</title>
        <meta name='description' content='Authentication' />
        <link rel='canonical' href='/auth' />
      </Helmet>

      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  )

}
export const useAuth = () => {
  return useContext(AuthContext)
}
