import Navbar from './components/Navbar'
import Home from './components/Home'
import React, { createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthProvider from './components/AuthProvider'
import RestrictedRoute from './components/RestrictedRoute'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallBack'

import About from './components/About'
import Gist from './components/Gist'
import LogInForm from './components/LogInForm'
import Profile from './components/Profile'
// import Profile from './components/Profile'

export const AuthContext = createContext(null)
export const useAuth = () => {
  return useContext(AuthContext)
}

function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AuthProvider>
          <Navbar />
          {/* <Home /> */}

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='gist' element={<Gist/>} />
            
            <Route
              path='/LoginForm'
              element={
                <RestrictedRoute>
                  <LogInForm />
                </RestrictedRoute>
              }
            />
            <Route path='profile' element={<Profile />} />
          </Routes>
        </AuthProvider>
      </ErrorBoundary>
    </div>
  )
}

export default App
