import { useState, useEffect } from "react";
import H1 from "./headers/H1";

function uid() {
  return `${Date.now}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const savedTasks = window.localStorage.getItem("tasks");

  const [tasks, setTasks] = useState(savedTasks ? JSON.parse(savedTasks) : []);
  const [text, setText] = useState("");

  function addNewTask(event) {
    event.preventDefault();
    if (!text || text.trim().length === 0 || text === "") {
      alert("Пожалуйста заполните описание задачи");
      return;
    }
    const newTasks = [...tasks, { id: uid(), text: text, status: false }];
    setTasks(newTasks);
    console.log(tasks);
    setText("");
  }

  function changeStatus(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        task.status = !task.status;
      }
      return task;
    });

    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    // const newTasks = tasks.map((task) => {
    //   if (task.id != taskId) {
    //     return task;
    //   }
    // });

    if (confirm("Вы действительно хотите удалить эту задачу?")) {
      const newTasks = tasks.filter((task) => {
        if (task.id != taskId) {
          return task.id != taskId;
        }
      });
      setTasks(newTasks);
    }
  }

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="wrapper">
        {/* <H1 headerText={"ToDo"} /> */}
        {/* <H1 className="header">ToDo</H1> */}
        <H1>ToDo</H1>
        <form action="" className="form" onSubmit={addNewTask}>
          <input
            type="text"
            placeholder="Новая задача..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="button">
            Добавить
          </button>
        </form>

        {tasks.length > 0 ? (
          <ul className="list">
            {tasks.map(function (task) {
              return (
                <li className="item" key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.status}
                    value="1"
                    onChange={() => {
                      changeStatus(task.id);
                    }}
                  />
                  <span className={task.status ? "done" : null}>{task.text}</span>
                  <button
                    onClick={() => {
                      deleteTask(task.id);
                    }}
                  >
                    ❌
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "Список задач пустой"
        )}

      </div>
    </>
  );
}
