import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomNavLink from './CustomNavLink'

function Gist() {
  return (
    <div>
      <h1 className='header-align'>DATING TIMELINE</h1>
      <CustomNavLink className='resize' to='Healthy'>
        Healthy Dating Timeline{' '}
      </CustomNavLink>
      &nbsp;| &nbsp; 
      <CustomNavLink className='resize' to='NotHealthy'>
       Not Healthy timeline
      </CustomNavLink>
       &nbsp;| &nbsp; 
      <CustomNavLink className='resize' to='Errorpage'>
         DontClick!!!
      </CustomNavLink>
      <Outlet />
    </div>
  )
}

export default Gist