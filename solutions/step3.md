Our `ListItem` is pretty set from step 2.5, so we focus on `TodoList`.
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
    const newTodos = todos.concat([ inputText ]);
    this.setState({
      todos: newTodos,
      inputText: ""
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <ListItem
              key={`listItem-${index}`}
              content={todo}
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
We have `handleInputChange` to deal with user input, and we have `submitTodo` to deal with hitting the button.

**Important:** You might be tempted to do something like the following:
```
submitTodo = () => {
  this.state.todos.push(this.state.inputText);
  this.setState({ inputText: "" });
}
```
and if you do this, it may end up working. However, remember that **we should never directly modify `this.state` except for when we declare it in the constructor**. This is why we choose to use the `.concat` method instead, which returns a new array!

The other tricky thing is the `map` in the `render` function. We covered this in Workshop, and you'll use it a lot in React, so make sure you're super clear on it!
