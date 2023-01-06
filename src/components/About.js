import React from 'react'
import { Helmet } from 'react-helmet-async'
import Smile from '../images/smilingCouple.jpg'

// import beachlove from '../images/beachlove.jpg'
function About() {
  return (
   <div
      style={{
         backgroundImage: `url(${Smile})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '700px'
      }}
    >
 <div>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Give Detailed Description Of The Application"
        />


        
        <link rel="canonical" href="/About" />
      </Helmet>
      </div>
      </div>
   

  )
}

export default About