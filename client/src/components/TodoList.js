import React, { useState } from "react";
import ListItem from "./ListItem.js";
import "./TodoList.css";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const submitTodo = () => {
    setTodos([...todos, inputText]);
    setInputText("");
  };

  const deleteTodo = (index) => {
    // One way to copy an array:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    const newTodos = todos.slice();
    newTodos.splice(index, 1)
    setTodos(newTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <ListItem
            key={`listItem-${index}`}
            content={todo}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </ul>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={submitTodo}>Add to-do!</button>
    </div>
  );
}

export default TodoList;