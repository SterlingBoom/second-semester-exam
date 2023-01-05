import { useNavigate, useLocation } from 'react-router-dom'
import { useReducer } from 'react'
import useLog from './useLog'
import { AuthContext } from '../App'
import Reducer from './reducer'

//Provides neccessary data required by the Routes
const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const initialState = {
    token: null,
    funds: '',
    fund: '',
    amount: '',
    phone: '',
    network: '',
    values: [],
    account_values: [],

    account_amount: '',
    account_name: '',
    account_number: '',
    account_type: '',
    access: '',
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  const handle_Input = (e) => {
    e.preventDefault()
    dispatch({
      type: 'handle_Input',
      field: e.target.name,
      payload: e.target.value,
    })
    if (state.amount !== ' ') {
      state.fund = ' '
      state.success = ' '
    }
  }

  const handle_Account_Input = (e) => {
    e.preventDefault()
    dispatch({
      type: 'handle_Account_Input',
      field: e.target.name,
      payload: e.target.value,
    })
    if (state.account_amount !== ' ') {
      state.funds = ''
    }
  }

  // // const Form_Btn = (e) => {
  // //   e.preventDefault()
  // //   if (state.amount === '') {
  // //     dispatch({ type: 'EMPTY_STRING' })
  // //     return
  // //   }
  // //   if (state.amount > state.dash) {
  // //     dispatch({ type: 'INSUFFICIENT' })
  // //     return
  // //   }
  // //   if (isNaN(state.amount)) {
  // //     dispatch({ type: 'NUM' })
  // //     return
  // //   }

  // //   if (state.network === '' || state.network === 'select') {
  // //     dispatch({ type: 'NET' })
  // //     return
  // //   }
  // //   if (isNaN(state.phone)) {
  // //     dispatch({ type: 'INVALID_PHONE' })
  // //     return
  // //   }
  // //   if (state.phone === '') {
  // //     dispatch({ type: 'NONUMBER' })
  // //     return
  // //   } else {
  // //     const date = new Date()
  // //     const showTime =
  // //       date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

  // //     const suffix = {
  // //       id: new Date().getTime().toString(),
  // //       time: showTime,
  // //       balance: state.dash - state.amount,
  // //       myAmount: state.amount,
  // //       myphone: state.phone,
  // //       mynetwork: state.network,
  // //     }
  // //     dispatch({ type: 'SUFFICIENT', payload: suffix })
  // //   }
  // // }

  // const Form_Acc_Btn = (e) => {
  //   e.preventDefault()
  //   if (state.account_amount === '') {
  //     dispatch({ type: 'EMPTY_STRING_ACCOUNT' })
  //     return
  //   }
  //   if (state.account_amount > state.dash) {
  //     dispatch({ type: 'INSUFFICIENT_ACCOUNT' })
  //     return
  //   }
  //   if (isNaN(state.account_amount)) {
  //     dispatch({ type: 'NUM_ACCOUNT' })
  //     return
  //   }
  //   if (isNaN(state.account_number)) {
  //     dispatch({ type: 'INVALIDACNUMBER' })
  //     return
  //   }
  //   if (state.account_type === '' || state.account_type === 'select') {
  //     dispatch({ type: 'NET_ACCOUNT' })
  //     return
  //   }
  //   if (state.account_name === '' || state.account_name === 'select') {
  //     dispatch({ type: 'NET_ACCOUNT_NAME' })
  //     return
  //   }
  //   if (state.account_number === '') {
  //     dispatch({ type: 'NONUMBER_ACCOUNT' })
  //     return
  //   }
  //   if (state.access === '') {
  //     dispatch({ type: 'NOINVALID' })
  //     return
  //   }
  //   if (state.access !== '2342f2f1d131rf12') {
  //     dispatch({ type: 'INVALID' })
  //     return
  //   } else {
  //     const date = new Date()
  //     const showTime =
  //       date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

  //     const suffix = {
  //       id: new Date().getTime().toString(),
  //       time: showTime,
  //       balance: state.dash - state.account_amount,
  //       myAmount_account: state.account_amount,
  //       myaccount_number: state.account_number,
  //       myaccount_name: state.account_name,
  //       myaccount_type: state.account_type,
  //     }
  //     dispatch({ type: 'SUFFICIENT_ACCOUNT', payload: suffix })
  //   }
  //   state.access = ''
  // }

  const { name, setName, handleChange, text, setText } = useLog('')

  

  const onLogin = async () => {
    if (name === '') {
      setText('UserName Cannot Be Empty')
      return
    }
    if (!isNaN(name)) {
      setText('UserName Must Not be Numbers Only')
      return
    }

    

    // dispatch({ type: 'Token', tok: toker })
    // const origin = location.state?.from?.pathname || '/About'
    // navigate(origin)
    // navigate('/About')
  }

  // const handleLogout = () => {
  //   dispatch({ type: 'LOGOUT' })
  //   setName('')
  //   setText('')
  // }

  const value = {
    name,
    setName,
    handleChange,
    // TOKEN: state.token,
    handleLogin: onLogin,
    // onLogout: handleLogout,
    text,
    setText,
    // FUNDS: state.funds,
    // FUND: state.fund,
    // AMOUNT: state.amount,
    // PHONE: state.phone,
    // NETWORK: state.network,
    // DASH: state.dash,
    // VALUES: state.values,
    // handle_Input,
    // Form_Btn,
    // ACC_AMOUNT: state.account_amount,
    // ACC_NAME: state.account_name,
    // ACC_NUMBER: state.account_number,
    // ACC_TYPE: state.account_type,
    // ACC_VALUES: state.account_values,
    // handle_Account_Input,
    // Form_Acc_Btn,
    // ACC_ACCESS: state.access,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
