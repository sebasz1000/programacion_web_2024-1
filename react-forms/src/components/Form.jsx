import { useState } from 'react'
import { useTasks } from '../hooks/useTasks'

export function Form(){
  const [formState, setFormState] = useState("")
  
  const {createTask} = useTasks()

  
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
    createTask(formState)
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