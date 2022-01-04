import React, { useState } from "react";
import "./ListItem.css";

const ListItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.checked;
    setIsDone(value);
  };

  return (
    <li className={isDone ? "ListItem-checked" : ""}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleInputChange}
      />
      <span className="ListItem-content">{props.content}</span>
      <button onClick={props.deleteTodo}>X</button>
    </li>
  );
};

export default ListItem;
