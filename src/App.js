// src/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import EditTaskForm from './EditTaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (editedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === editedTask.id ? { ...editedTask, completed: task.completed } : task
      )
    );
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList
        tasks={tasks.sort((a, b) => a.name.localeCompare(b.name))}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={(task) => setEditingTask(task)}
      />
      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onEdit={editTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default App;
