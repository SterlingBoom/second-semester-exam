import React from 'react'
import {Helmet} from 'react-helmet-async'

function Home() {
  return (
    <>
      <Helmet>
       <title>Home page for Olubunmi's exam page</title>
       <meta name ="description" content='My Altschool second semester exam page'/>
       <link rel='canonical' href='/' />
      </Helmet>

      <h2 className='home-page'>You are on Olubunmi's exam home page</h2>
    </>
  )
}

export default Home
