// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import ErrorPage from './components/ErrorPage'
// import Hobbies from './components/Hobbies'
// import Singing from './components/Singing'
// import Cooking from './components/Cooking'
// import { ErrorBoundary } from 'react-error-boundary'
// // import ErrorFallback from './components/ErrorFallBack'
// import ErrorHandler from './components/ErrorHandler'
// import { Profile } from './components/Profile'
// import { AuthProvider } from './components/auth'
// import { RequireAuth } from './components/RequireAuth'
// import { Login } from './components/Login'

// function App() {
//   return (
//     <>
//       <AuthProvider>
//         <Navbar />
//         <ErrorBoundary FallbackComponent={ErrorHandler}>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='about' element={<About />} />
//             <Route path='hobbies' element={<Hobbies />}>
//               <Route path='singing' element={<Singing />} />
//               <Route path='cooking' element={<Cooking />} />
//               <Route path='*' element={<ErrorPage />} />
//             </Route>
//             <Route
//               path='profile'
//               element={
//                 <RequireAuth>
//                   <Profile />
//                 </RequireAuth>
//               }
//             />
//             <Route path='*' element={<ErrorPage />} />
//             <Route path='login' element={<Login />} />
//           </Routes>
//         </ErrorBoundary>
//       </AuthProvider>
//     </>
//   )
// }
// function ErrorHandler({ error }) {
//   return (
//     <div role='alert'>
//       <p>An error occurred:</p>
//       <pre>{error.message}</pre>
//     </div>
//   )
// }

// import * as React from 'react'
// import { NavLink } from 'react-router-dom'

// const CustomNavLink = ({ to, ...props }) => {
//   let activeStyle = {
//     textDecoration: 'underline',
//     color: 'red',
//     transition: 'all 4s',
//   }

//   return (
//     <NavLink
//       style={({ isActive }) =>
//         isActive ? activeStyle : { textDecoration: 'none' }
//       }
//       to={to}
//       end
//       {...props}
//     />
//   )
// }
// import React from 'react'
// import CustomNavLink from './CustomNavLink'
// import { Outlet } from 'react-router-dom'
// import {Helmet} from 'react-helmet-async'
// function Hobbies() {
//   return (
//     <>
//       <Helmet>
//         <title>Hobbies page</title>
//         <meta name='description' content='Hobbies' />
//         <link rel='canonical' href='/Hobbies' />
//       </Helmet>

//       <h1 className='nested-header'>
//         This hobby page is used to implement nested routes
//       </h1>
//       <nav className='nested-style'>
//         <CustomNavLink className='resize' to='singing'>
//           {' '}
//           Singing
//         </CustomNavLink>
//         &nbsp;| &nbsp;
//         <CustomNavLink className='resize' to='cooking'>
//           Cooking
//         </CustomNavLink>
//         &nbsp;| &nbsp;
//         <CustomNavLink className='resize' to='Errorpage'>
//           TestError404
//         </CustomNavLink>
//         <Outlet />
//       </nav>
//     </>
//   )
//   import React, { useState } from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'
// import { useAuth } from './auth'
// import { Helmet } from 'react-helmet-async'

// export const Login = () => {
//    <Helmet>
//      <title>Login page for Olubunmi's exam About page</title>
//      <meta
//        name='description'
//        content='Login'
//      />
//      <link rel='canonical' href='/Login' />
//    </Helmet>

//   const [user, setUser] = useState('')
  

//   const auth = useAuth()
//   const navigate = useNavigate()
//   const location = useLocation()

//   const redirectPath = location.state?.path || '/profile'

//   const handleLogin = () => {
//     auth.login(user)
//     navigate(redirectPath, { replace: true })
    
//   }
//   return (
//     <div>
//       <Helmet>
//         <title>Login page for Olubunmi's exam About page</title>
//         <meta name='description' content='Login' />
//         <link rel='canonical' href='/Login' />
//       </Helmet>

//       <label>
//         Username:{' '}
//         <input type='text' onChange={(e) => setUser(e.target.value)} />
//       </label>

//       <button onClick={handleLogin}>Login </button>

//       <h2 className='mt-3'>
//         To access the profile page, You will have to Login first
//       </h2>
//     </div>
//   )
// }
// import { useAuth } from './auth'
// import { Navigate, useLocation } from 'react-router-dom'

// export const RequireAuth = ({ children }) => {
//   const location = useLocation()
//   const auth = useAuth()

//   if (!auth.user) {
//     return <Navigate to='/login' state={{ path: location.pathname }} />
//   }
//   return children
// }


// }

// export default Hobbies


// export default CustomNavLink

// export default ErrorHandler
// 
// import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet-async'
// function ErrorPage() {
//   return (
//     <>
//       <Helmet>
//         <title>Error 404  page</title>
//         <meta name='description' content=' Test for ERROR 404' />
//         <link rel='canonical' href='/ErrorPage' />
//       </Helmet>

//       <div>
//         <h1 className='error-colour'>Error 404. Page not found.</h1>
//         <h2 className='url-color'>This URL is not correct</h2>
//         <Link to='/'>Go back to home page</Link>
//       </div>
//     </>
//   )
// }

// export default ErrorPage

// export default App
