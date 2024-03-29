
const Reducer = (state, action) => {
  switch (action.type) {
    case 'handle_Input':
      return {
        ...state,
        [action.field]: action.payload,
      }
   
    case 'INVALID_PHONE':
      return {
        ...state,
        revert: 'Invalid Phone Number',
      }
    
    case 'ADEQUATE':
      const newAttendee = [...state.values, action.payload]
      return {
        ...state,
        revert: 'REGISTRATION SUCCESSFUL!',
        values: newAttendee,
        firstName: '',
        lastName: '',
        phone: '',
        age:'',
        email:'',
        Gender:''
      }
    
    case 'EMPTY_STRING':
      return {
        ...state,
        revert: 'Please Enter your First Name',
      }
    
    case 'EMPTY':
      return {
        ...state,
        revert: 'Please Enter your Last Name',
      }
    
    case 'WRONG_AGE':
      return {
        ...state,
        revert: 'VALID AGE IS 18 AND ABOVE',
      }
    
    case 'WRONG_EMAIL':
      return {
        ...state,
        revert: 'Please Enter A VALID EMAIL',
      }
    
   
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        reverts: '',
        revert: '',
        phone: '',
        age: '',
        email: '',
        values: [],
      

        firstName: '',
        lastName: '',

        
      }
    
    
    default:
      return state
  }
}

export default Reducer
