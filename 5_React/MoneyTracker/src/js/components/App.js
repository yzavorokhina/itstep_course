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
    /**
     * {id: 123123, text: "Задача 1", status: 1}
     */
    // const task = {
    //   id: uid(),
    //   text: text,
    //   status: 0,
    // };

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
      {/* <H1 headerText={"ToDo"} /> */}
      {/* <H1 className="header">ToDo</H1> */}
      <H1>Money Tracker</H1>
      <form action="" className="form" onSubmit={addNewTask}>
        <input
          type="date"
          placeholder="Введите дату..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Описание"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Сумма"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="button">
          Добавить в расходы
        </button>

        <input
          type="number"
          placeholder="Доход"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="button">
          Установить новую сумму
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
    </>
  );
}
