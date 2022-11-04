import  Task  from './Task';
const Tasks = ({tasks, onDeleteTask, onTaskDB}) => {
    
  return (
    <>
        {
         tasks.map((el) => (
                <Task handleTaskDB={()=>onTaskDB(el.id)} onDelete={()=>onDeleteTask(el.id)} key={el.id} task={el} />
            ))
        }
    </>
  )
}

export default Tasks
