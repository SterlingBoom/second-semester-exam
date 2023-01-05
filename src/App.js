import Navbar from './components/Navbar'
import Home from './components/Home'
import React, { createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthProvider from './components/AuthProvider'
import background from "./images/couple.jpg"

export const AuthContext = createContext(null)
export const useAuth = () => {
  return useContext(AuthContext)
}

const App = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${background})`
       }}
      ></div>
      <AuthProvider>
        <Navbar />

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={<Home />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
