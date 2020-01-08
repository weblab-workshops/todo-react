import React, { Component } from "react";
import ListItem from "./ListItem.js";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.idCounter = 0;
    this.state = {
      todos: [],
      inputText: ""
    };
  }

  // We need every todo to have a unique id,
  // since that's what we use to delete,
  // so we keep a running counter to make ids
  getId = () => {
    this.idCounter += 1;
    return this.idCounter;
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputText: value
    });
  };

  submitTodo = () => {
    const { todos, inputText } = this.state;
    const newTodos = todos.concat([{ text: inputText, id: this.getId() }]);
    this.setState({
      todos: newTodos,
      inputText: ""
    });
  };

  deleteTodo = (idToRemove) => {
    const { todos } = this.state;
    const filteredTodos = todos.filter(el => el.id !== idToRemove);
    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <div className="TodoList-container">
        <h1>{this.props.title}</h1>
        <ul>
          {this.state.todos.map(todo => (
            <ListItem
              key={`listItem-${todo.id}`}
              content={todo.text}
              deleteTodo={() => this.deleteTodo(todo.id)}
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
