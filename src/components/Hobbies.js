import React from 'react'
import CustomNavLink from './CustomNavLink'
import { Outlet } from 'react-router-dom'
function Hobbies() {
  return (
    <>
      <h1 className='nested-header'>
        This hobby page is used to implement nested routes
      </h1>
      <nav className='nested-style'>
        <CustomNavLink className='resize' to='singing'>
          {' '}
          Singing
        </CustomNavLink>{' '}
        &nbsp;| &nbsp;
        <CustomNavLink className='resize' to='cooking'>
          Cooking
        </CustomNavLink>
        <Outlet />
      </nav>
    </>
  )
}

export default Hobbies
