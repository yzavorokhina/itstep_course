// TodoList
// Описание: Простейший todo-лист.
// Требования: - добавление задач - удаление задач - отметка выполненных
// Ожидаемые навыки: - работа с массивами в state - подъём состояния
/*********************************************************************************************/

import React, { useState } from 'react';
import TodoItem from './TodoItem';


/* TodoList1: */
// const TodoList = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Learn React', completed: false },
//     { id: 2, text: 'Build Todo App', completed: true },
//   ]);

//   const toggleTodo = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   const updateTodo = (id, newText) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, text: newText } : todo
//       )
//     );
//   };

//   return (
//      <div className="todo-app">
//       <h1>Todo List</h1>
//     <div className="todo-list">
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           onToggle={toggleTodo}
//           onDelete={deleteTodo}
//           onUpdate={updateTodo}
//         />
//       ))}
//     </div>
//     </div>
//   );
// };

// export default TodoList;

/* TodoList2: */
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo App', completed: true },
  ]);

  const [statusLog, setStatusLog] = useState([]);

  // Simulated async operations
  const toggleTodo = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const updateTodo = async (id, newText) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleStatusChange = (todoId, status) => {
    setStatusLog(prev => [
      ...prev.slice(-10), // Keep last 10 entries
      { todoId, status, timestamp: new Date().toLocaleTimeString() }
    ]);
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      {/* Status log (optional) */}
      {statusLog.length > 0 && (
        <div className="status-log">
          <h3>Status Log</h3>
          <ul>
            {statusLog.map((log, i) => (
              <li key={i}>
                Todo {log.todoId}: {log.status} at {log.timestamp}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;