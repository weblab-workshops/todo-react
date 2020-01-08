In a parent component, such as `TodoList`, we have the following
```html
import React, { Component } from "react";
import ListItem from "./ListItem.js";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <ListItem content="item A"/>
          <ListItem content="item B"/>
        </ul>
      </div>
    );
  }
}

export default TodoList;

```
And `ListItem` should look something like the following
```html
import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <input type="checkbox" />
        <span>{this.props.content}</span>
      </li>
    );
  }
}

export default ListItem;

```
The crucial part here is that our `render` has a `<span>` that just directly renders the `content` prop we passed in!