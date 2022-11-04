import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Task = ({ task, onDelete, handleTaskDB }) => {
  
  return (
    <div className={`task ${task.reminder?'reminder':''}`}
    onDoubleClick={()=>handleTaskDB(task.id)} >
      <h3 className="task">
        { task.text }
        <FaTimes onClick={onDelete} style={{ float: "right", color: "red" }} />
      </h3>
      <p>{task.day}</p>
      <p>Show alert {task.reminder.toString()}</p>
      <p><Link to={ `/task/${task.id}` }>Show Detail</Link></p>
    </div>
  );
};

export default Task;
