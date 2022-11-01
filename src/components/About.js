import React from 'react'
import {Helmet} from 'react-helmet-async'

function About() {
  return (
    <>
      <Helmet>
        <title>Home page for Olubunmi's exam About page</title>
        <meta
          name='description'
          content='My Altschool second semester exam About page'
        />
        <link rel='canonical' href='/About' />
      </Helmet>

      <h2 className='topic'>Frontend Second Semester Examination Project</h2>
      <h3 className='instructions'>
        Question Three : <br />
        Setup react-router, implement Nested routes,
        <br /> 404 page, and Error boundary.
        <br /> Set up fake userAuthContext using the context API to always carry
        out a fake authentication, <br /> bonus - extract out a custom hook to
        get the currently logged-in user.
        <br /> Implement SEO and Navigation menu that will show on each page.
      </h3>
    </>
  )
}

export default About
