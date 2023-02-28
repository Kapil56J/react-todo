import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div>
        <input value={inputText} onChange={inputTextHandler} type="text" />
        <button onClick={submitTodoHandler} type="submit">
          ADD
        </button>
      </div>
      <h4>Total Items : {todos.length}</h4>
      <div>
        <select onChange={statusHandler} name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
