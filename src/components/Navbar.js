import React from 'react'
import {Link} from "react-router-dom"
import { useAuth } from '../App'
import { Helmet } from 'react-helmet-async'

function Navbar() {
  // const {  setName } = useAuth()
  return (
    <nav>
      <Helmet>
        <title>Navigation page</title>
        <meta name='description' content='navigation' />
        <link rel='canonical' href='/Navigation' />
      </Helmet>
      
      <h1>
        <i>Relationship ENTHUSIAST</i>{' '}
      </h1>

      <div>
        <ul id='navbar'>
          <li>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='nav-links'

            >
              About
            </Link>
          </li>
          <li>
            <Link to='/' className='nav-links'>
              nested route
            </Link>
          </li>
          <li>
            <Link to='/' className='nav-links'>
              Profile
            </Link>
          </li>
          <li>
            <Link to='/LogInForm' className='nav-links'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
        }
        
          

export default Navbar
