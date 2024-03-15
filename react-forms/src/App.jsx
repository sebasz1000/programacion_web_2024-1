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

function TasksList({tasks}){

  return(
  <ul id="tasks-list">
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
</ul>)
}

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [] 

function App() {
  
  const [tasks, setTasks] = useState(initTasks)
  
  useEffect( () => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  } , [tasks])

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

  const getGetTaskList = (hasTasks) =>  {
    return hasTasks
            ? <TasksList tasks={tasks}/>
            : <NoTasksMsg />
  }

  const hasTasks = tasks.length > 0

  return (
    <>
      <p>Este es el valor del Input</p>
      <div className="container">
        <h1>React Forms</h1>
        <Form onSubmit={createTask} />
        { getGetTaskList(hasTasks) }
      </div>
    </>
  )
}

function NoTasksMsg(){
  return <p>Sorry, there are not tasks over here :/</p>
}


export default App
