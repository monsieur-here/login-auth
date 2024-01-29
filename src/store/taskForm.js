// TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from './taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask({ title }));
    history('/');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
