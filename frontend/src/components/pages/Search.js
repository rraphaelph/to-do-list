import { useState, useEffect } from "react";
import TaskCard from "../task/TaskCard";
import axios from "axios";
import styles from "../form/Form.module.css";
import { Link } from "react-router-dom";
import Task from "../task/Task";

function Search() {
  const [title, setTitle] = useState([]);
  const [tasks, setTask] = useState([]);
  const [buscardados, setBuscardados] = useState([]);

  const baseURL = "http://localhost:5000/tasks/search";

  const searchTask = async () => {
    try {
      const response = await axios.get(`${baseURL}/${buscardados}`);
      setTask(response.data);
      console.log(response.data);
    } catch (error) {
      console.log();
    }
  };

  //console.log(buscardados);
  return (
    <section className={styles.form_container}>
      <form action="#">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Search"
          value={buscardados}
          onChange={(e) => setBuscardados(e.target.value)}
        />

        <input type="submit" value='Search' onClick={searchTask} />
      </form>
  <div>
      {tasks.map((task) => (
        <Task key={tasks.id} task={task} />
      ))}
        </div>
    </section>
  );
}

export default Search;
