import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <>
      <ul style={{listStyle:"none"}}>
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;