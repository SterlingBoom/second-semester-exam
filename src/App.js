import Navbar from './components/Navbar'
import Home from './components/Home'
import React, { createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthProvider from './components/AuthProvider'

import About from './components/About'
// import Profile from './components/Profile'

export const AuthContext = createContext(null)
export const useAuth = () => {
  return useContext(AuthContext)
}

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
    

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
