import React from "react";
import { TaskProvider } from "./components/taskContext";
import TodoList from "./components/todoList";

const App = () => {
  return (
    <TaskProvider>
      <TodoList />
    </TaskProvider>
  );
};

export default App;