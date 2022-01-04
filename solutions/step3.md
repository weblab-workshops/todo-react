Our `ListItem` is pretty set from step 2.5, so we focus on `TodoList`.
```html
import React, {useState} from "react";
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

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <ListItem
            key={`listItem-${index}`}
            content={todo}
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
We have `handleInputChange` to deal with user input, and we have `submitTodo` to deal with hitting the button.

**Important:** You might be tempted to do something like the following:
```
submitTodo = () => {
  todos.push(inputText);
  setInputText("");
}
```
and if you do this, it may end up working. However, remember that **we should never directly modify `state` except for when we declare it with useState**. This is why we choose to use the `setTodo` method instead, which modifies todo and notifies React about the update!

The other tricky thing is the `map` in the `return` function. We covered this in Workshop, and you'll use it a lot in React, so make sure you're super clear on it!
