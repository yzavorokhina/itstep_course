import { useState } from "react";
import H1 from "./headers/H1";

function uid() {
  return `${Date.now}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addNewTask(event) {
    event.preventDefault();
    /**
     * {id: 123123, text: "Задача 1", status: 1}
     */

    // const task = {
    //   id: uid(),
    //   text: text,
    //   status: 0,
    // };

    const NewTasks = [...tasks, { id: uid(), text: text, status: 0 }];

    setTasks(NewTasks);

    console.log(tasks);
  }

  return (
    <>
      {/* <H1 headerText={"ToDo"} /> */}
      {/* <H1 className="header">ToDo</H1> */}
      <H1>ToDo</H1>
      <form class="form" onSubmit={addNewTask}>
        <input
          type="text"
          placeholder="Новая задача..."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
      <ul class="list">
        {tasks.map(function (task) {
          return (
            <li class="item">
              <input type="checkbox" checked value="1" />
              <span class="done">Задача 1</span>
              <button>❌</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
