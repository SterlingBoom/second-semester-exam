//Provides the Required response to a specific action and condition
const Reducer = (state, action) => {
  switch (action.type) {
    case 'handle_Input':
      return {
        ...state,
        [action.field]: action.payload,
      }
    case 'handle_Account_Input':
      return {
        ...state,
        [action.field]: action.payload,
      }
   
    case 'INVALID_PHONE':
      return {
        ...state,
        fund: 'Invalid Phone Number',
      }
    case 'INVALID':
      return {
        ...state,
        funds: 'Invalid Token',
      }
    case 'SUFFICIENT':
      const newPeople = [...state.values, action.payload]
      return {
        ...state,
        fund: 'Recharge Successful',
        values: newPeople,
        dash: state.dash - state.amount,
        amount: '',
        phone: '',
        network: '',
      }
    case 'SUFFICIENT_ACCOUNT':
      const newPeoples = [...state.account_values, action.payload]
      return {
        ...state,
        funds: 'Transfer Successful',
        account_values: newPeoples,
        dash: state.dash - state.account_amount,
        account_amount: '',
        account_name: '',
        account_number: '',
        account_type: '',
      }
    case 'EMPTY_STRING':
      return {
        ...state,
        fund: 'Please Enter An Amount',
      }
    case 'EMPTY_STRING_ACCOUNT':
      return {
        ...state,
        funds: 'Please Enter An Amount To Transfer',
      }
   
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        amount: '',
        phone: '',
        network: '',
        funds: '',
        fund: '',
      }
    
    
    case 'INVALIDACNUMBER':
      return {
        ...state,
        funds: 'Invalid Account Number',
      }
    case 'NET':
      return {
        ...state,
        fund: 'Please Select a Network',
      }
    case 'NET_ACCOUNT':
      return {
        ...state,
        funds: 'Please Select Account Type',
      }
    case 'NET_ACCOUNT_NAME':
      return {
        ...state,
        funds: 'Please Enter Account Name',
      }
    case 'NONUMBER':
      return {
        ...state,
        fund: 'Please Input Number to Recharge',
      }
    case 'NOINVALID':
      return {
        ...state,
        funds: 'Enter Access Token',
      }
    case 'NONUMBER_ACCOUNT':
      return {
        ...state,
        funds: 'Please Enter An Account Number',
      }
    default:
      return state
  }
}

export default Reducer
