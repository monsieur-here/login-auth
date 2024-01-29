// TaskDetails.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTask, removeTask } from './taskSlice';

const TaskDetails = () => {
  const { taskId } = useParams();
  const task = useSelector(state => state.tasks.find(task => task.id === taskId));
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSave = updatedTask => {
    dispatch(updateTask(updatedTask));
    history('/');
  };

  const handleDelete = () => {
    dispatch(removeTask(taskId));
    history('/');
  };

  return (
    <div>
      <h2>Task Details</h2>
      {task && (
        <div>
          <p>Title: {task.title}</p>
          {/* Additional task details and subtasks */}
          <button onClick={() => handleSave(task)}>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
