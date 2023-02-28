import "./App.css";

// Importing Components
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // to input
  const [inputText, setInputText] = useState("");
  // to store
  const [todos, setTodos] = useState([]);
  // to status (completed or uncompleted)
  const [status, setStatus] = useState("all");
  // to filter
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>

      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
