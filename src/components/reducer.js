//Provides the Required response to an action and condition
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
      const newPeople = [...state.values, action.payload]
      return {
        ...state,
        revert: 'REGISTRATION SUCCESSFUL!',
        values: newPeople,
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
        revert: 'Please Enter A VALID AGE',
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
