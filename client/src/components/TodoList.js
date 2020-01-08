import React, { Component } from "react";
import ListItem from "./ListItem.js";
import "./TodoList.css";

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
      <div className="TodoList-container">
        <h1>{this.props.title}</h1>
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
