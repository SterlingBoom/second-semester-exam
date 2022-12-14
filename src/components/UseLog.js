import { useState } from 'react'

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


export default useLog
