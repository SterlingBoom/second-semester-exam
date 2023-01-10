import React from 'react'
import { useAuth } from '../App'
import { Helmet } from 'react-helmet-async'
import { useEffect, useRef } from 'react'
import beachlove from "../images/beachlove.jpg"

function Home() {
    const { handleLogin,  name, handleChange, text } = useAuth()
    const myuseref = useRef(null)
    useEffect(() => {
      myuseref.current.focus()
    }, [])
  return (
    <div
      style={{
         backgroundImage: `url(${beachlove})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '700px'
      }}
    >
      <div>
        <Helmet>
          <title>Home page for Olubunmi's exam page</title>
          <meta
            name='description'
            content='My Altschool second semester exam page'
          />
          <link rel='canonical' href='/' />
        </Helmet>
<main className='main'>
        <h2 className='home-page'>
          Welcome,  You are on SterlingB's Love corner page...... <b>SECOND EDITION IS HERE!!</b>
        </h2>
        <div className='shift'>
        <h3>
          Would you like to be a participant?
        </h3>
        <h4>
          Enter a username to gain access to a log in form to reserve a spot for
          you. We cant wait to have you.
        </h4>
        
        <input
          ref={myuseref}
          type='text'
          className='username'
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="Username">Username</label><br/>
        
        <button type='button' className='sign-in' onClick={handleLogin}>
          Get started
        </button>
        <span className='invalid'>{text}</span>
        </div>
        </main>
      </div>
      
    </div>
  )
}

export default Home
