import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { useAuth } from '../App'
import { Helmet } from 'react-helmet-async'
import { BiMenuAltLeft } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'

function Navbar() {
  const [navOpen, setNavOpen] = useState(true)

  const handleToggle = () => {
    setNavOpen(!navOpen)
  }

  const hideNav = () => {
    setNavOpen(true)
  }

  const {  logOut } = useAuth()
  return (
    <nav>
      <Helmet>
        <title>Navigation page</title>
        <meta name='description' content='navigation' />
        <link rel='canonical' href='/Navigation' />
      </Helmet>

      <h1 className='italic'>
        <i>Relationship ENTHUSIAST</i>{' '}
      </h1>

      <div>
        <ul id='navbar' className={`nav ${navOpen ? '' : 'open'}`}>
          <li>
            <Link
              to='/'
              className='nav-links active'
              activeclass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={hideNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='nav-links'
              activeclass='active'
              spy='true'
              smooth={true}
              offset={-100}
              duration={500}
              onClick={hideNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/Gist'
              className='nav-links'
              activeclass='active'
              spy='true'
              smooth={true}
              offset={-100}
              duration={500}
              onClick={hideNav}
            >
              Gist
            </Link>
          </li>
          <li>
            <Link
              to='/Profile'
              className='nav-links'
              activeclass='active'
              spy='trur'
              smooth={true}
              offset={-100}
              duration={500}
              onClick={hideNav}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='nav-links'
              activeclass='active'
              spy='true'
              smooth={true}
              offset={-100}
              duration={500}
              onClick={hideNav}
            >
              Login
            </Link>
          </li>
          <button type="button" className="log-out" onClick={logOut}>
          Log out
          </button>
        </ul>
      </div>
      <div className='mobile--menu' onClick={handleToggle}>
        {navOpen ? <BiMenuAltLeft size='2.5em' /> : <IoMdClose size='2.5em' />}
      </div>
    </nav>
  )
        }
        
          

export default Navbar
