import "./App.css";
import { useState } from 'react'


function Form({ onSubmit }){
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

const initTasks = [
  {
    id: crypto.randomUUID(),
    title: "Tarea 1",
    completed: false
  }
]

function App() {
  
  const [tasks, setTasks] = useState(initTasks)
  
  // Create task
  const createTask = (taskTitle) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      completed: false
    }
    const tasksTemp = [...tasks, newTask]
    
    setTasks(tasksTemp)
    
  }
  
  const deleteTask = (TaskId) => {
    // .filter()
  }
  
  
  return (
    <>
    <p>Este es el valor del Input</p>
    <div className="container">
      <h1>React Forms</h1>
      <Form onSubmit={createTask}/>
        <ul>
          {
            tasks.map( ({ id, title }) => <li key={id}>{title}<button>DELETE</button></li> )
          }
        </ul>
    </div>
      
    </>
  )
}

export default App
