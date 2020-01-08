`TodoList.js`:
```html
import React, { Component } from "react";
import ListItem from "./ListItem.js";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputText: ""
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputText: value
    });
  };

  submitTodo = () => {
    const { todos, inputText } = this.state;
    const newTodos = todos.concat([inputText]);
    this.setState({
      todos: newTodos,
      inputText: ""
    });
  };

  deleteTodo = (index) => {
    const { todos } = this.state;
    // One way to copy an array:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    const newTodos = todos.slice();
    newTodos.splice(index, 1)
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <ListItem
              key={`listItem-${index}`}
              content={todo}
              deleteTodo={() => this.deleteTodo(index)}
            />
          ))}
        </ul>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.submitTodo}>Add to-do!</button>
      </div>
    );
  }
}

export default TodoList;
```

`ListItem.js`:
```html
import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    };
  }

  handleInputChange = event => {
    const value = event.target.checked;
    this.setState({
      isDone: value
    });
  };

  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange}
        />
        <span>{this.props.content}</span>
        <button onClick={this.props.deleteTodo}>X</button>
      </li>
    );
  }
}

export default ListItem;
```
We make a `deleteTodo` function that takes an index as input, and makes a new to-do array without the element at that index. Note, we don't pass it directly to each `ListItem`, we actually define an anonymous function everytime, whose only job is to call `deleteTodo` with a specific index!

Then in `ListItem`, we simply call that `deleteTodo` prop passed when we click on the X.