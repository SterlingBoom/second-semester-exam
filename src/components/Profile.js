import { useAuth } from '../App'
import { Helmet } from 'react-helmet-async'
import loveit from '../images/lovesofine.png'


const Profile = ()=> {
 function randomNumber (){
  let randomValue= Math.floor(Math.random() * 10)
  return randomValue
 }
 const { name,  VALUES } = useAuth()
 return (
  <div
      style={{
         backgroundColor:'#000',
         height: '700px',
         
      }}
    >
 
   <main className='main'>
   <div className='profile-page'>
     <Helmet>
       <title>PROFILE</title>
       <meta
         name='description'
         content='Shows All Your Registration  Details'
       />
       <link rel='canonical' href='/profile' />
     </Helmet>
     <img src={loveit} alt="love" height={'50px'} />
     <h1 className='left-align'>Welcome, &nbsp; {name.toUpperCase()} We are glad to have you </h1>
     <h4 className='details'>Find your details below</h4>
     <h2 className='m-t'> your Seat Number is #20#.</h2>
     
     {VALUES.map((vals) => {
       return (
         <div className='' key={vals.id}>
           <p className='underline'>
             <b>First Name</b>:&nbsp; {vals.myFirstName}
           </p>
           <p className='underline'>
             <b>Last Name</b>: &nbsp; {vals.myLastName}
           </p>
           <p className='underline'>
             <b>Age </b>: &nbsp; {vals.myAge}
           </p>
           <p className='underline'>
             {' '}
             <b>Email</b>: &nbsp;{vals.myEmail}
           </p>
           <p className='underline'>
             <b>Gender</b>: &nbsp; {vals.myGender}
           </p>
           <p className='underline'>
             <b>Marital Status</b>: &nbsp; {vals.myMaritalStatus}
           </p>
           <p>
             <b>Time of Registration</b>: {vals.time}
           </p>
           <br />
           <br />
           <p className='see-you'>
             {' '}
             <i>SEE YOU THERE</i>
           </p>
         </div>
       )
     })}
     </div>
   </main>
   </div>
 )
}

export default Profile;