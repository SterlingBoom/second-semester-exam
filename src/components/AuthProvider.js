import { useNavigate, useLocation } from 'react-router-dom'
import { useReducer } from 'react'
import useLog from './useLog'
import { AuthContext } from '../App'
import Reducer from './reducer'


const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  

  const initialState = {
    reverts: '',
    revert: '',
    firstName: '',
    lastName: '',
    phone: '',
    age:'',
    email:"",
    gender:'',
    values: [],
    
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  const handle_Input = (e) => {
    e.preventDefault()
    dispatch({
      type: 'handle_Input',
      field: e.target.name,
      payload: e.target.value,
    })
    if (state.firstName !== ' ') {
      state.revert = ' '
      state.success = ' '
    }
  }

  

  // const Form_Btn = (e) => {
  //   e.preventDefault()
  //   if (state.firstName === '') {
  //     dispatch({ type: 'EMPTY_STRING' })
  //     return
  //   }
  //   if (state.lastName === '') {
  //     dispatch({ type: 'EMPTY' })
  //     return
  //   }
    
  //   }
  //   if (isNaN(state.age)) {
  //     dispatch({ type: 'WRONG_AGE' })
  //     return
  //   }

  
  //    if (isNaN(state.phone)) {
  //     dispatch({ type: 'INVALID_PHONE' })
  //    return
  //    }
  //   //  if (state.age < 18) {
  //   //    dispatch({ type: 'WRONG_AGE' })
  //   //    return
  //   //  }
  //     else {
  //     const date = new Date()
  //     const showTime =
  //       date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  //     const suffix = {
  //      id: new Date().getTime().toString(),
  //      time: showTime,
  
  //        myfirstName: state.firstName,
  //        mylastName:state.lastName,
  //        myphone: state.phone,
  //        mygender:state.gender,
  //        myAge: state.age,
  //        myEmail:state.email
  //      }
  //     dispatch({ type: 'ADEQUATE', payload: suffix })
  
  //  }
    
  const { name, setName, handleChange, text, setText } = useLog('')



  const onLogin = async () => {
    if (name === '') {
      setText('UserName Cannot Be Empty')
      return
    }
    if (!isNaN(name)) {
      setText('UserName Must Not be Numbers Only')
      return
    }else{
    // const redirectPath = location.state?.path || '/profile'
const origin = location.state?.from?.pathname || '/LoginForm'
        navigate(origin)
        navigate('/LoginForm')
    }
  }

  // const handleLogout = () => {
  //   dispatch({ type: 'LOGOUT' })
  //   setName('')
  // setText('')
  // }

  const value = {
    name,
    setName,
    handleChange,
    handleLogin: onLogin,
    // onLogout: handleLogout,
    text,
    setText,
    REVERTS: state.reverts,
    FIRSTNAME: state.firstName,
    LASTNAME: state.lastName,
    AGE: state.age,
    
    GENDER: state.gender,
    EMAIL: state.email,
    REVERT: state.revert,
    PHONE: state.phone,
    VALUES: state.values,
    handle_Input,
    // Form_Btn,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
