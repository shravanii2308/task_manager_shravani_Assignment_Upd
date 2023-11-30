// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    priority: 'low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.trim() === '') {
      alert('Task name is required!');
      return;
    }
    onSubmit(task);
    setTask({
      name: '',
      description: '',
      priority: 'low',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Task Description:
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Priority Level:
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
