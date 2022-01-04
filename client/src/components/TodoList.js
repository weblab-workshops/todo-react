import React, { useState } from "react";
import ListItem from "./ListItem.js";
import "./TodoList.css";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [keyCounter, setKeyCounter] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const submitTodo = () => {
    const newTodos = todos.concat([{ todo: inputText, key: keyCounter }]);
    setKeyCounter(keyCounter + 1);
    setTodos(newTodos);
    setInputText("");
  };

  const deleteTodo = (key) => {
    const newTodos = todos.filter((item) => item.key !== key);
    setTodos(newTodos);
  };

  return (
    <div className="TodoList-container">
      <h1>{props.title}</h1>
      <ul>
        {todos.map((item) => (
          <ListItem
            key={`listItem-${item.key}`}
            content={item.todo}
            deleteTodo={() => deleteTodo(item.key)}
          />
        ))}
      </ul>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={submitTodo}>Add to-do!</button>
    </div>
  );
};

export default TodoList;
