//  import React from 'react'
 import { useAuth } from '../App'
 import { useEffect, useRef } from 'react'
 import Hold from '../images/holdHands.jpg'

function LogInForm() {
  
  const {
    FIRSTNAME,
    LASTNAME,
    AGAIN,
    
    // Form_Btn,
    PHONE,
    GENDER,
    AGE,
    EMAIL,
    handle_Input,
  } = useAuth();
  const myuseref = useRef(null);
  useEffect(() => {
    myuseref.current.focus();
  }, []);
  const Done = () => {
    return (
      <>
        <p>
          {AGAIN}{' '}

        </p>
      </>
    )
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Hold})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '700px',
        }}
      >

      <div className='form-container form-box'>
        <h2 className='form-header'> Log in to register for the workshop</h2>
        
        <form>
          <div>
            <input
              type='text'
              id='firstName'
              ref={myuseref}
              value={FIRSTNAME}
              onChange={handle_Input}
              placeholder='First Name'
              autoComplete='off'
              required
            />
            <label htmlFor='firstname'>First Name </label>
          </div>
          <div>
            <input
              type='text'
              id='firstName'
              ref={myuseref}
              value={LASTNAME}
              onChange={handle_Input}
              placeholder='Last Name'
              autoComplete='off'
              required
            />
            <label htmlFor='Lastname'>Last Name </label>
          </div>
          <div>
            <input
              type='number'
              id='firstName'
              ref={myuseref}
              value={AGE}
              onChange={handle_Input}
              placeholder='Age'
              autoComplete='off'
              required
            />
            <label htmlFor='Age'> Age</label>
          </div>

          <div>
            <input
              type='tel'
              id='firstName'
              ref={myuseref}
              value={PHONE}
              onChange={handle_Input}
              placeholder='Phone'
              autoComplete='off'
              required
            />
            <label htmlFor='Phone number'>Phone Number </label>
          </div>
          <div>
            <input
              type='email'
              id='firstName'
              ref={myuseref}
              value={EMAIL}
              onChange={handle_Input}
              placeholder='Email'
              autoComplete='off'
              required
            />
            <label htmlFor='Email'>Email </label>
          </div>
          <div>
            <select value={GENDER} onChange={handle_Input} name='gender'>
              <option value='select'>select</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
            <label labelfor='Gender'></label>
            <p
              className={
                AGAIN === 'Registration Successful' ? 'success' : 'error_msg'
              }
            >
              {AGAIN === 'Registration Successful' ? <Done /> : AGAIN}
            </p>

            <button type='submit' className='sign-in'>
              REGISTER NOW
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default LogInForm