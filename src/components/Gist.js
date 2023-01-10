import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Gist() {
  return (
    <div>
      <h1> DATING TIMELINE</h1>
      <Link to='Healthy'>Healthy Dating timeline</Link>
      <Link to='NotHealthy'>Healthy Dating timeline</Link>
      <Outlet />
    </div>
  )
}

export default Gist