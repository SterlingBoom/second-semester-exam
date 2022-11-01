import * as React from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: 'underline',
    color: 'red',
    transition: 'all 4s',
  }

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: 'none' }
      }
      to={to}
      end
      {...props}
    />
  )
}

export default CustomNavLink
