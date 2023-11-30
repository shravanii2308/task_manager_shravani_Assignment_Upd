// src/components/EditTaskForm.js
import React, { useState, useEffect } from 'react';

const EditTaskForm = ({ task, onEdit, onClose }) => {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTask.name.trim() === '') {
      alert('Task name is required!');
      return;
    }
    onEdit(editedTask);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          name="name"
          value={editedTask.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Task Description:
        <textarea
          name="description"
          value={editedTask.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Priority Level:
        <select
          name="priority"
          value={editedTask.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditTaskForm;
