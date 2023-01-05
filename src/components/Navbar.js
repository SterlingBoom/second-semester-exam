import React from 'react'
import {Link} from "react-router-dom"
import { useAuth } from '../App'
import { Helmet } from 'react-helmet-async'
import couple from "../images/couple.jpg"

function Navbar() {
  const {  setName } = useAuth()
  return (
    <nav>
      <Helmet>
        <title>Navigation page</title>
        <meta name='description' content='navigation' />
        <link rel='canonical' href='/Navigation' />
      </Helmet>
      <div style={{ backgroundImage: `url('${couple}')` }} />
      <h1>
        <i>STERLING B'S LOVE CORNER</i>{' '}
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
              to='/'
              className='nav-links'
              onClick={() => setName((name) => (name = ''))}
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
            <Link to='/about' className='nav-links'>
              Profile
            </Link>
          </li>
          <li>
            <Link to='/' className='nav-links'>
              login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
        }
        
          

export default Navbar
