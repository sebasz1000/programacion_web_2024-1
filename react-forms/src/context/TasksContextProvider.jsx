import { useState, useEffect } from 'react'
import { TasksContext } from "./TasksContext"

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [] 

export function TasksContextProvider({ children }){
  
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
  
  return(
    <TasksContext.Provider value={{
      tasks,
      createTask,
      deleteTask,
      completeTask
    }}>
      {children}
    </TasksContext.Provider>
  )
}