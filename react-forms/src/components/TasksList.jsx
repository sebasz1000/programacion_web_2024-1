import { useTasks } from "../hooks/useTasks"

export function TasksList(){
  
  const {tasks, deleteTask, completeTask} = useTasks()
  const handleDelete = () => deleteTask()
  const handleToggle = () => completeTask()
  
  const hasTasks = tasks.length > 0
  
  const getGetTaskList = (hasTasks) =>  {
    return hasTasks
            ? (<ul id="tasks-list">
                  {
                    tasks.map( task => (
                      <Task task={task}
                            onDelete={handleDelete}  
                            onToggle={handleToggle} 
                            key={task.id}/> ))
                  }
                </ul>)
            : <NoTasksMsg />
  }
  
  return getGetTaskList(hasTasks)
    
}


function Task({ task, onDelete, onToggle }){
  
  const { id, title } = task
  
  const handleClick = () => onDelete()
  const handleOnChange = () => onToggle()
  return(
    <li key={id} 
        className="d-flex space-between">
            <div>
            <input type="checkbox" 
                  style={{marginRight: '1rem'}}
                   onChange={handleOnChange} />
              {title}
            </div>
            <button onClick={handleClick}>
              DELETE
            </button>
    </li>
  )
}

function NoTasksMsg(){
  return <p>Sorry, there are not tasks over here :/</p>
}