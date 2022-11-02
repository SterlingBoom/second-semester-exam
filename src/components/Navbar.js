import React from 'react'
import CustomNavLink from './CustomNavLink'
import { useAuth } from './auth'

function Navbar() {
  const auth = useAuth()
  return (
    <>
      <nav>
        <h1 className='logo'>Welcome to Olatujoye Olubunmi's Exam page</h1>
        <CustomNavLink className='resize' to='/'>
          Home &nbsp;
        </CustomNavLink>
        |&nbsp;
        <CustomNavLink className='resize' to='/About'>
          &nbsp; About &nbsp;
        </CustomNavLink>
        |&nbsp;
        <CustomNavLink className='resize' to='/Hobbies'>
          &nbsp; Hobbies &nbsp;
        </CustomNavLink>
        | &nbsp;
        <CustomNavLink className='resize' to='/profile'>
          &nbsp; Profile |
        </CustomNavLink>
        {!auth.user && (
          <CustomNavLink className='resize' to='/login'>
            &nbsp; Login
          </CustomNavLink>
        )}
      </nav>
    </>
  )
}

export default Navbar