// AddTodo.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTodoList = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime(),
        text
      }
    });
    setText('');
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodoList;
