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

    this.keyCounter = 0;
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      inputText: value
    });
  };

  submitTodo = () => {
    const { todos, inputText } = this.state;
    const newTodos = todos.concat([{ todo: inputText, key: this.keyCounter }]);
    this.keyCounter++;

    this.setState({
      todos: newTodos,
      inputText: ""
    });
  };

  deleteTodo = key => {
    const { todos } = this.state;
    const newTodos = todos.filter(item => item.key !== key);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="TodoList-container">
        <h1>{this.props.title}</h1>
        <ul>
          {this.state.todos.map(item => (
            <ListItem
              key={`listItem-${item.key}`}
              content={item.todo}
              deleteTodo={() => this.deleteTodo(item.key)}
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
