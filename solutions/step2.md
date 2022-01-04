In a parent component, such as `TodoList`, we have the following
```html
import React from "react";
import ListItem from "./ListItem.js";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        <ListItem content="item A"/>
        <ListItem content="item B"/>
      </ul>
    </div>
  );
}

export default TodoList;

```
And `ListItem` should look something like the following
```html
import React from "react";

const ListItem = (props) => {
  return (
    <li>
      <input type="checkbox" />
      <span>{props.content}</span>
    </li>
  );
}

export default ListItem;

```
The crucial part here is that our `return` has a `<span>` that just directly renders the `content` prop we passed in!