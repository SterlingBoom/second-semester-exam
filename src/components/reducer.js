//Provides the Required response to a specific action and condition
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
        fund: 'Invalid Phone Number',
      }
    
    case 'SUFFICIENT':
      const newPeople = [...state.values, action.payload]
      return {
        ...state,
        fund: 'ReGISTRATION SUCCESSFUL Successful',
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
        fund: 'Please Enter your First Name',
      }
    
    case 'EMPTY':
      return {
        ...state,
        fund: 'Please Enter your Last Name',
      }
    
    case 'WRONG_AGE':
      return {
        ...state,
        fund: 'Please Enter A VALID AGE',
      }
    
    case 'WRONG_EMAIL':
      return {
        ...state,
        fund: 'Please Enter A VALID EMAIL',
      }
    
   
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        funds: '',
        fund: '',
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
