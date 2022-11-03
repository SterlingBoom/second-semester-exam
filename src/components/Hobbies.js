import React from 'react'
import CustomNavLink from './CustomNavLink'
import { Outlet } from 'react-router-dom'
import {Helmet} from 'react-helmet-async'
function Hobbies() {
  return (
    <>
      <Helmet>
        <title>Hobbies page</title>
        <meta name='description' content='Hobbies' />
        <link rel='canonical' href='/Hobbies' />
      </Helmet>

      <h1 className='nested-header'>
        This hobby page is used to implement nested routes
      </h1>
      <nav className='nested-style'>
        <CustomNavLink className='resize' to='singing'>
          {' '}
          Singing
        </CustomNavLink>
        &nbsp;| &nbsp;
        <CustomNavLink className='resize' to='cooking'>
          Cooking
        </CustomNavLink>
        &nbsp;| &nbsp;
        <CustomNavLink className='resize' to='Errorpage'>
          TestError404
        </CustomNavLink>
        <Outlet />
      </nav>
    </>
  )
}

export default Hobbies
