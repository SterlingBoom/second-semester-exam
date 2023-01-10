//  import React from 'react'
// function LogInForm() {
//   const {
//     FIRSTNAME,
//     LASTNAME,
//     FUND,
//     Form_Btn,
//     PHONE,
//     GENDER,
//     AGE,
//     EMAIL,
//     handle_Input,
//   } = useAuth();
//   const myuseref = useRef(null);
//   useEffect(() => {
//     myuseref.current.focus();
//   }, []);
//   const Successfun = () => {
//     return (
//       <>
//     
//       </>
//     );
//   };
//   return (
//     <div className='form-container'>
//       <h2> Log in to register for the workshop</h2>
//       <h1>yayyyyyyyyyyyyyyyyyyyyyy</h1>
//       <form>
//         <div>
//           <label for='firstname'> </label>
//           <input
//             type='text'
//             ref={myuseref}
//             value={FIRSTNAME}
//             onChange={handle_Input}
//             placeholder='First Name'
//             autoComplete='off'
//             required
//           />
//         </div>
//         <div>
//           <label for='Lastname'> </label>
//           <input
//             type='text'
//             ref={myuseref}
//             value={LASTNAME}
//             onChange={handle_Input}
//             placeholder='Last Name'
//             autoComplete='off'
//             required
//           />
//         </div>
//         <div>
//           <label for='Age'> </label>
//           <input
//             type='number'
//             ref={myuseref}
//             value={AGE}
//             onChange={handle_Input}
//             placeholder='Age'
//             autoComplete='off'
//             required
//           />
//         </div>
//         <div>
//           <label for='Phone number'> </label>
//           <input
//             type='tel'
//             ref={myuseref}
//             value={PHONE}
//             onChange={handle_Input}
//             placeholder='Phone'
//             autoComplete='off'
//             required
//           />
//         </div>
//         <div>
//           <label for='Email'> </label>
//           <input
//             type='email'
//             ref={myuseref}
//             value={EMAIL}
//             onChange={handle_Input}
//             placeholder='Email'
//             autoComplete='off'
//             required
//           />
//         </div>
//         <div>
//           <label labelfor='Gender'></label>
//           <select value={GENDER} onChange={handle_Input} name='gender'>
//             <option value='select'>select</option>
//             <option value='Male'>Male</option>
//             <option value='Female'>Female</option>
//           </select>
//           <p
//             className={FUND === 'Recharge Successful' ? 'success' : 'error_msg'}
//           >
//             {FUND === 'Recharge Successful' ? <Successfun /> : FUND}
//           </p>
//           <button type='submit' className='sign-in' onClick={Form_Btn}>
//             REGISTER NOW
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }
// export default LogInForm
"use strict";