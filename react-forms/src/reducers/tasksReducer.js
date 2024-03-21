import { TASK_ACTIONS } from "../consts/tasksActions"

export const reducerTask = (tasks, action) => {
    if(action.type === TASK_ACTIONS.CREATE_TASK){
      const newTask = {
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false
      }
      
      return [...tasks, newTask]
      
    }else if(action.type === TASK_ACTIONS.TOGGLE_TASK){
      window.alert("TASK TOGGLED!!")
      return tasks
    }else if(action.type === TASK_ACTIONS.DELETE_TASK){
      window.alert("TASK DELETED")
      return tasks
    }else{
      return tasks
    }
  }