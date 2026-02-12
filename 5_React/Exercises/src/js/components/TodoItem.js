// TodoItem
// Описание: Отдельный элемент todo-списка.
// Требования: - текст задачи - статус выполнено / не выполнено - визуальное отличие
// выполненной задачи
// Ожидаемые навыки: - props - conditional styles
/*********************************************************************************************/

import React, { useState, useEffect } from 'react';

/* TodoItem1: */
// const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editText, setEditText] = useState(todo.text);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     if (editText.trim()) {
//       onUpdate(todo.id, editText);
//       setIsEditing(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSave();
//     } else if (e.key === 'Escape') {
//       setIsEditing(false);
//       setEditText(todo.text);
//     }
//   };

//   return (
//     <div className="todo-item">
//       <div className="todo-content">
//         <input
//           type="checkbox"
//           checked={todo.completed}
//           onChange={() => onToggle(todo.id)}
//           className="todo-checkbox"
//         />

//         {isEditing ? (
//           <input
//             type="text"
//             value={editText}
//             onChange={(e) => setEditText(e.target.value)}
//             onKeyDown={handleKeyDown}
//             onBlur={handleSave}
//             autoFocus
//             className="todo-input"
//           />
//         ) : (
//           <span
//             className={`todo-text ${todo.completed ? 'completed' : ''}`}
//             onClick={handleEdit}
//           >
//             {todo.text}
//           </span>
//         )}
//       </div>

//       <button
//         onClick={() => onDelete(todo.id)}
//         className="todo-delete"
//         aria-label="Delete todo"
//       >
//         ×
//       </button>
//     </div>
//   );
// };

// export default TodoItem;

/* TodoItem2: */
const TodoItem = ({
  todo,
  onToggle,
  onDelete,
  onUpdate,
  onStatusChange // Optional callback for status tracking
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [status, setStatus] = useState('idle'); // idle, editing, saving, error

  // Sync editText with todo.text when prop changes
  useEffect(() => {
    setEditText(todo.text);
  }, [todo.text]);

  const handleToggle = () => {
    setStatus('saving');
    onToggle(todo.id)
      .then(() => setStatus('idle'))
      .catch(() => setStatus('error'));
  };

  const handleDelete = () => {
    setStatus('deleting');
    onDelete(todo.id)
      .then(() => setStatus('idle'))
      .catch(() => setStatus('error'));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setStatus('editing');
  };

  const handleSave = async () => {
    if (!editText.trim()) return;

    setStatus('saving');
    try {
      await onUpdate(todo.id, editText);
      setIsEditing(false);
      setStatus('idle');
    } catch (err) {
      setStatus('error');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditText(todo.text);
      setStatus('idle');
    }
  };

  // Optional external status notification
  useEffect(() => {
    if (onStatusChange) {
      onStatusChange(todo.id, status);
    }
  }, [status, todo.id, onStatusChange]);

  return (
    <div
      className={`todo-item status-${status} ${todo.completed ? 'completed' : ''}`}
      aria-label={`Todo: ${todo.text}`}
    >
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          disabled={status === 'saving'}
          className="todo-checkbox"
          aria-label={`Mark ${todo.text} as complete`}
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            autoFocus
            className="todo-input editing"
            aria-label="Edit todo text"
            placeholder="Edit task..."
          />
        ) : (
          <span
            className="todo-text"
            onClick={handleEdit}
            role="button"
            tabIndex={0}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="todo-actions">
        <button
          onClick={handleDelete}
          disabled={status === 'saving'}
          className="todo-delete"
          aria-label={`Delete ${todo.text}`}
        >
          ×
        </button>

        {status === 'error' && (
          <span
            className="status-message error"
            role="alert"
          >
            Error!
          </span>
        )}

        {status === 'saving' && (
          <span
            className="status-message saving"
            aria-live="polite"
          >
            Saving...
          </span>
        )}
      </div>
    </div>
  );
};

// Default props
TodoItem.defaultProps = {
  onStatusChange: null
};

export default TodoItem;