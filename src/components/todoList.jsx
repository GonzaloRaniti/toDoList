import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.danger ? "#e63946" : "#007bff")};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <Container>
      <Card>
        <Title>Lista de Tareas</Title>
        <InputContainer>
          <Input
            type="text"
            placeholder="¿Qué tarea desea agregar?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTask}>Agregar</Button>
        </InputContainer>
        <TaskList>
          {tasks.map((t, index) => (
            <TaskItem key={index}>
              {t} <Button danger onClick={() => removeTask(index)}>Borrar</Button>
            </TaskItem>
          ))}
        </TaskList>
        {tasks.length > 0 && <Button danger onClick={clearTasks}>Borrar todas</Button>}
      </Card>
    </Container>
  );
};

export default TodoList;