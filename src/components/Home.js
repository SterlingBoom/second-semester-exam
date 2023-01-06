import React from 'react'
import { useAuth } from '../App'
import { Helmet } from 'react-helmet-async'
import { useEffect, useRef } from 'react'
import beachlove from "../images/beachlove.jpg"

function Home() {
    const { handleLogin, name, handleChange, text } = useAuth()
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

        <h2 className='home-page'>
          You are on SterlingB's Love corner home page
        </h2>
        <h3>
          To get access to a ticket for second edition of love corner's workshop
        </h3>
        <h4>
          Enter a username to gave access to a log in form to reserve a spot for
          the workshop
        </h4>
        <input
          ref={myuseref}
          type='text'
          className='input_user'
          value={name}
          onChange={handleChange}
        />
        <button type='button' className='sign-in' onClick={handleLogin}>
          Sign In
        </button>
        <span className='invalid'>{text}</span>
      </div>
    </div>
  )
}

export default Home
