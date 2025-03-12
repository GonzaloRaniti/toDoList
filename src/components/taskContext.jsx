import React, { createContext, useState, useContext } from "react";

const TaskContext = createContext();

export const useTasks = () => {
    return useContext(TaskContext);
  };
  
  export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");
  
    const addTask = (task) => {
      if (tasks.includes(task)) {
        setError("La tarea ya existe.");
      } else {
        setTasks([...tasks, task]);
        setError("");
      }
    };
  
    const removeTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };
  
    const clearTasks = () => {
      setTasks([]);
    };
  
    return (
      <TaskContext.Provider
        value={{ tasks, error, addTask, removeTask, clearTasks }}
      >
        {children}
      </TaskContext.Provider>
    );
  };
