export function TasksList({tasks, onDelete, onToggle}){
  
  const handleDelete = () => onDelete()
  const handleToggle = () => onToggle()
  
  return(
    <ul id="tasks-list">
      {
        tasks.map( task => (
          <Task task={task}
                onDelete={handleDelete}  
                onToggle={handleToggle} 
                key={task.id}/> ))
      }
    </ul>)
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