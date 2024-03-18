import { useState } from 'react'

export function Form({ onSubmit }){
  const [formState, setFormState] = useState("")
  
  const handleInput = ({target}) =>{
    /*
      Any required validation form
      if(target.value === "x")
        return
    */
    setFormState(target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formState)
      setFormState("")
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <input type="text"
              onChange={handleInput}
              value={formState} />
      <button type="submit"> 
        Submit 
      </button>
    </form>
  )
}