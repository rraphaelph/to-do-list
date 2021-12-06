import { useState, useEffect } from "react";

import axios from "axios";

import styles from "../form/Form.module.css";
import TaskCard from "../task/TaskCard";

function Home() {
  const [tasks, setTask] = useState([]);
  useEffect(()=>{
    const teste = async() =>{
      const date = await axios.get("http://localhost:5000/tasks/all")
      setTask(date.data)
    }
    teste()
  },[])
  
  return (
    <TaskCard tasks={tasks}/>
  );
}

export default Home;
