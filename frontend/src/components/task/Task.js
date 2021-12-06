import axios from "axios";
import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import styles from "../task/Task.module.css";
import { Link } from "react-router-dom";
import { BsWindowSidebar } from "react-icons/bs";

const Task = ({ task }) => {
  const [hide, setHide] = useState('');
  const [done, setDone] = useState('');
  const parametros = useParams();
  const baseURL = "http://localhost:5000/tasks/updatestatusHide";

  console.log(task.id)

  useEffect(()=>{
    const baseURL = "http://localhost:5000/tasks/edit"
    const teste = async() =>{
      const date = await axios.get(`${baseURL}/${task.id}`)
      setHide(date.data.hide)
      setDone(date.data.done)
    }
    teste()
  },[])

  
  async function UpdateTaskHide() {
    await setHide(!hide)
    
    console.log(hide);
    try {
      const response = await axios.patch(`${baseURL}`, {
        id: task.id,
        task: { hide: !hide },
      });
     
      console.log(response);
    } catch (err) {
      console.log(err);
    }
     window.location.reload()
  }

  async function UpdateTaskDone() {
    
    await setDone(!done);
    const baseURL = "http://localhost:5000/tasks/updatestatus";
    
    console.log(done);
    try {
      const response = await axios.patch(`${baseURL}`, {
        id: task.id,
        task: { done: !done },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    window.location.reload()
  }

  async function Remove(idTask) {
    const baseURL = "http://localhost:5000/tasks/remove";
    try {
      const response = await axios.delete(`${baseURL}/${task.id}`);
    } catch (err) {
      console.log("n foi possivel exlcuir");
    }
    window.location.reload();
  }

  return (
    <div
      className="styles.task_list"
      style={task.done ? { textDecoration: "line-through" } : {}}
    >
      <ul className={styles.task_list}>
        <li>
          <div
            className="styles.task_list"
            style={task.hide ? { visibility: "hidden" } : {}}
          >
            <Link
              className={styles.title}
              style={task.done ? { color: "#ccc" } : {}}
              to={`edit/${task.id}`}
            >
              {" "}
              {task.title}{" "}
            </Link>
          </div>
          <div className={styles.actions}>
            <button type="submit" value={done} onClick={UpdateTaskDone}>
              <i className="bi bi-check2"></i>
            </button>

            <button type="submit" onClick={Remove}>
              <i className="bi bi-x-lg"></i>
            </button>

            <button type="submit" value={hide} onClick={UpdateTaskHide}>
              <i className="bi bi-eye-slash"> </i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Task;
