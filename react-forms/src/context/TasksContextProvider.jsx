import { useReducer, useEffect } from 'react'
import { TasksContext } from "./TasksContext"
import { reducerTask } from '../reducers/tasksReducer'
import { TASK_ACTIONS } from '../consts/tasksActions'

/* 
const action = {
  type: "CREATE_TASK",
  payload: "new task title"
}

const action = {
  type: "TOGGLE_TASK",
  payload: {
    id,
    checked
  }
}

*/

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [] 

export function TasksContextProvider({ children }){
  
  const [tasks, dispatchTask] = useReducer(reducerTask, initTasks)
  
  useEffect( () => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  } , [tasks])

  // Create task
  const createTask = (taskTitle) => { 
    const action = {
      type: TASK_ACTIONS.CREATE_TASK,
      payload: taskTitle
    }
    dispatchTask(action)
  }
  
  const deleteTask = (/* TaskId */) => {
    const action = {
      type: TASK_ACTIONS.DELETE_TASK,
      payload: 2
    }
    dispatchTask(action)
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