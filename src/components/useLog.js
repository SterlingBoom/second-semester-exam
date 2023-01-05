import { useState } from 'react'

//******************************************************//
// An Extracted custom hook to get currently logged in User
const useLog = () => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
    if (name !== ' ') {
      setText('')
    }
  }

  return { name, setName, handleChange, text, setText }
}

//**********************************************************//

export default useLog
