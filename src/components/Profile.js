import { useAuth } from '../App'
import { Helmet } from 'react-helmet-async'
import loveit from '../images/lovesofine.png'


const Profile = ()=> {
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
     <h1 className='left-align'>Welcome {name.toUpperCase()}, We are glad to have you </h1>
     <p className='details'>Find your details below</p>
     <h1 className='m-t'> Your Seat Number is #20#.</h1>
     
     
     {VALUES.map((vals) => {
       return (
         <div className='' key={vals.id}>
           <h1 className='underline'>
             <b>First Name</b>:&nbsp; {vals.myFirstName}
           </h1>
           <h1 className='underline'>
             <b>Last Name</b>: &nbsp; {vals.myLastName}
           </h1>
           <h1 className='underline'>
             <b>Age </b>: &nbsp; {vals.myAge}
           </h1>
           <h1 className='underline'>
             {' '}
             <b>Email</b>: &nbsp;{vals.myEmail}
           </h1>
           <h1 className='underline'>
             <b>Gender</b>: &nbsp; {vals.myGender}
           </h1>
           <h1 className='underline'>
             <b>Marital Status</b>: &nbsp; {vals.myMaritalStatus}
           </h1>

           <h1 className='underline'>
             {' '}
             <b>Time of Registration</b>: {vals.time}
           </h1>
           <h4>Date: 08/05/2024</h4>
           <h5>Venue: CC hub Yaba Lagos</h5>
           <br />
           <br />
           <h1 className='see-you'>
             {' '}
             <i>SEE YOU THERE</i>
           </h1>
         </div>
       )
     })}
     </div>
   </main>
   </div>
 )
}

export default Profile;