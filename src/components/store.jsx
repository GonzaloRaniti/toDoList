// store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../components/tasksSlice'; 

export const store = configureStore({
  reducer: {
    tasks: tasksReducer, 
  },
});
