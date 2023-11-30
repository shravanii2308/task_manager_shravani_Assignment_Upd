// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
  

  
  
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'low':
        return 'green';
      case 'medium':
        return 'orange';
      case 'high':
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ color: getPriorityColor(task.priority) }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
            onClick={() => onEdit(task)}
          >
            {task.name}
          </span>
          <button className="edit-button" onClick={() => onEdit(task)}>
            Edit
          </button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
