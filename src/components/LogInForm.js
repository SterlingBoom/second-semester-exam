//  import React from 'react'
 import { useAuth } from '../App'
 import { useEffect, useRef } from 'react'
//  import useLog from './useLog'
 import Hold from '../images/holdHands.jpg'

function LogInForm() {
  
  const {
    FIRSTNAME,
    LASTNAME,
    REVERT,
    name,
    MARITALSTATUS,
    
    Form_Btn,
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
          {REVERT}{' '}

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
          <h1 className='welcome-header'>WELCOME&nbsp;{name.toUpperCase()} </h1>
          <h6 className='warning'>Please note that this page is accessible to 18years and above ONLY</h6>
          <h2 className='form-header'> Log In To Register For The Workshop</h2>

          <form>
            <div>
              <input
                type='text'
                id='firstName'
                name='firstName'
                ref={myuseref}
                value={FIRSTNAME}
                onChange={handle_Input}
                placeholder='First Name'
                autoComplete='off'
                required
              />
            </div> 
            <div>
              <input
                type='text'
                name='lastName'
                id='lastName'
                value={LASTNAME}
                onChange={handle_Input}
                placeholder='Last Name'
                autoComplete='off'
                required
              />
            </div>
             
             <div>
              <input
                type='number'
                id='age'
                name='age'
                value={AGE}
                onChange={handle_Input}
                placeholder='Age'
                autoComplete='off'
                required
              />
            </div> 

             <div>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={PHONE}
                onChange={handle_Input}
                placeholder='Phone'
                autoComplete='off'
                required
              />
            </div> 
            <div>
              <input
                type='email'
                id='email'
                name='email'
                // ref={myuseref}
                value={EMAIL}
                onChange={handle_Input}
                placeholder='Email'
                autoComplete='off'
                required
              />
            </div>
            <div>
              <select value={GENDER} onChange={handle_Input} name='gender'>
                <option value='select'>select</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Female'>Prefer</option>
              </select>
              <label labelfor='Gender'></label>
              </div>
            <div>
              <select value={MARITALSTATUS} onChange={handle_Input} name='maritalStatus'>
                <option value='select'>select</option>
                <option value='Single'>Single</option>
                <option value='Married'>Married</option>
                <option value='Divorced'>Divorced</option>
                <option value='Complicated'>Complicated</option>
              </select>
              <label labelfor='Gender'></label>
              </div>
              <p
                className={
                  REVERT === 'Registration Successful' ? 'activate' : 'error'
                }
              >
                {REVERT === 'Registration Successful' ? <Done /> : REVERT}
              </p>

              <button type='submit' className='sign-in' onClick={Form_Btn}>
                REGISTER NOW
              </button>
            
          </form>
        </div>
    </div>
    </div>
  )
}

export default LogInForm