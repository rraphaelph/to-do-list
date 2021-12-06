import {BsPencil, BsFillTrashFill } from'react-icons/bs'
import {Link} from 'react-router-dom'
import Task from '../../components/task/Task'
import styles from './Task.module.css'
function TaskCard({tasks}) {
    
    console.log(tasks)
    return (
        <div className={styles.task_list}>
            
            {
                tasks.map((task)=>(
                <Task
                key={task.id}
                task={task}
                />
            ))}
            
            
        </div>
    );
  }
  
  export default TaskCard;
  