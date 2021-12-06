import axios from "axios";
import { useState, useEffect, React, Component } from "react";
import { useParams } from 'react-router-dom';
import Input from "../form/Input";

import styles from "../form/Form.module.css";
//import Task from "../task/Task";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState("");
  const parametros =  useParams();

  useEffect(()=>{
    const baseURL = "http://localhost:5000/tasks/edit"
    const teste = async() =>{
      const date = await axios.get(`${baseURL}/${parametros.id}`)
      setTitle(date.data.title)
      setDescription(date.data.description)
      setDuedate(date.data.duedate)
    }
    teste()
  },[])

  const Update = async () => {
    const baseURL = "http://localhost:5000/tasks/edit";
    try {
      const response = await axios.put(`${baseURL}/${parametros.id}`, {
        title: title,
        description: description,
        duedate: duedate,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    window.location.reload()
  };

  return (
    <section className={styles.form_container}>
      <h1>Edit Task</h1>
      <form onSubmit={Update}>
        <input
          type="text"
          placeholder= 'Escreva o title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite a descricao"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={duedate}
          onChange={(e) => setDuedate(e.target.value)}
        />
        <input type="submit" value="Edit" onClick={Update} />
      </form>
    </section>
  );
};

export default Edit;
