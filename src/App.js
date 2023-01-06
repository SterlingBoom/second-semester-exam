import Navbar from './components/Navbar'
import Home from './components/Home'
import React, { createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthProvider from './components/AuthProvider'

import About from './components/About'
import LogInForm from './components/LogInForm'
// import Profile from './components/Profile'

export const AuthContext = createContext(null)
export const useAuth = () => {
  return useContext(AuthContext)
}

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route
            path='/login'
            element={
              <RestrictedRoute>
                <LogInForm />
              </RestrictedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
