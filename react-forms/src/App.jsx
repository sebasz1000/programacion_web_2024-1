import "./App.css";
import { useState, useEffect } from 'react'


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

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [] 

function App() {
  
  const [tasks, setTasks] = useState(initTasks)
  
  useEffect( () => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  } , [tasks])

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

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

  const completeTask = (/* id, completed(checkbox e.target.checked ) */) => {
    // map()
  }
  
  
  return (
    <>
      <p>Este es el valor del Input</p>
      <div className="container">
        <h1>React Forms</h1>
        <Form onSubmit={createTask} />
          <ul id="tasks-list">
            {
              /* NOTE: We should give a feedback to the user if taks array is empty(Hint: evaluate arra length)
                Example: if tasks array is empty, show a message "There are not task to show" */
            }
            {
              tasks.map( ({ id, title }) => (
                  <li key={id} 
                      className="d-flex space-between">
                    <div>
                    <input type="checkbox" 
                          style={{marginRight: '1rem'}} />
                      {title}
                    </div>
                    <button>DELETE</button>
                  </li>))
            }
          </ul>
      </div>
    </>
  )
}

export default App
