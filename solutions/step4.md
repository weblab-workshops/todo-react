`TodoList.js`:
```html
import React, { useState } from "react";
import ListItem from "./ListItem.js";

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
```

`ListItem.js`:
```html
import React, { useState } from "react";

const ListItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  const handleInputChange = event => {
    const value = event.target.checked;
    setIsDone(value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleInputChange}
      />
      <span>{props.content}</span>
      <button onClick={props.deleteTodo}>X</button>
    </li>
  );
}

export default ListItem;
```
To keep IDs, we use a class instance field called `keyCounter`. Remember that React Components are just JavaScript classes, so they can have instance variables other than state! We make `keyCounter` a normal instance variable since changing it shouldn't cause a rerender. We know it's unique everytime since we increment it whenever making a new todo. I use that in `submitTodo`. Then, `deleteTodo` takes the key as input, and filters the to-do list to get rid of that to-do. Note, we don't pass it directly to each `ListItem`, we actually define an anonymous function everytime, whose only job is to call `deleteTodo` with a specific ID!

Then in `ListItem`, we simply call that `deleteTodo` prop passed when we click on the X.
