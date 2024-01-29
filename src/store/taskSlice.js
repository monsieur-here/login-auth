// tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    updateTask(state, action) {
      // Update task logic
    },
    removeTask(state, action) {
      // Remove task logic
    },
    addSubtask(state, action) {
      // Add subtask logic
    },
    updateSubtask(state, action) {
      // Update subtask logic
    },
    removeSubtask(state, action) {
      // Remove subtask logic
    }
  }
});

export const { addTask, updateTask, removeTask, addSubtask, updateSubtask, removeSubtask } = taskSlice.actions;

export default taskSlice.reducer;

