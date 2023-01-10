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
        height: '700px',
      }}
    >
      <div>
        <Helmet>
          <title>About</title>
          <meta
            name='description'
            content='Give Detailed Description Of The Application'
          />

          <link rel='canonical' href='/About' />
        </Helmet>
        <main className='main'>
        <q className='about'>
          Your Personal and favourite Relationship Coach..... <br/>We started love's corner meetup in 2019<br/>
          to help people overcome their emotional challenges successfully. <br/>We match
          you with coaches who specialize in areas where you need help,<br/> and our
          coaches provide actionable advice that's personalized to your
          situation. <br/>. We're available  for ongoing support along your relationship
          journey.
        </q>
        </main>
      </div>
    </div>
  )
}

export default About