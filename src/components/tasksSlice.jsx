import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [], 
  error: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = action.payload;
      if (!state.tasks.includes(task)) {
        state.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(state.tasks)); 
        state.error = '';
      } else {
        state.error = 'La tarea ya existe.';
      }
    },
    removeTask: (state, action) => {
      const index = action.payload;
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); 
    },
    clearTasks: (state) => {
      state.tasks = [];
      localStorage.setItem('tasks', JSON.stringify([])); 
    },
  },
});

export const { addTask, removeTask, clearTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
