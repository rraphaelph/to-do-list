import { useState } from "react";

import axios from "axios";

import Input from "../form/Input";

import styles from "../form/Form.module.css";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState("");
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);
  console.log(title);
  console.log(description);
  console.log(duedate);

  async function Submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/tasks/add", {
        title,
        description,
        duedate,
        done,
        hide,
      });
      //console.log(response);
    } catch (err) {
      console.log(err);
    }
    window.location.reload()
  }

  return (
    <section className={styles.form_container}>
      <h1>Create task</h1>
      <form onSubmit={Submit}>
        <input
          type="text"
          placeholder="Digite o title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text" 
          placeholder="Digite a descricao"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="date" 
          onChange={(e) => setDuedate(e.target.value)}
          value={duedate}
        />
        <input type="submit" value="Create" />
      </form>
    </section>
  );
}

export default Create;
