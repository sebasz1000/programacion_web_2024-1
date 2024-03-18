import "./App.css";
import { useState, useEffect } from 'react'
import { Form, TasksList} from './components'
 
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
  
  const deleteTask = (/* TaskId */) => {
    window.alert('Task DELETED')
  }

  const completeTask = (/* id, e.target.checked  */) => {
    window.alert('Task COMPLETED')
  }

  const getGetTaskList = (hasTasks) =>  {
    return hasTasks
            ? (<TasksList tasks={tasks} 
                          onDelete={deleteTask}
                          onToggle={completeTask}/>)
            : <NoTasksMsg />
  }

  const hasTasks = tasks.length > 0

  return (
    <>
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
