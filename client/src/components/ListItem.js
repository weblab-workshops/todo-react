import React, { Component } from "react";
import "./ListItem.css";

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
      <li className={this.state.isDone ? "ListItem-checked" : ""}>
        <input
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange}
        />
        <span className="ListItem-content">{this.props.content}</span>
        <button onClick={this.props.deleteTodo}>X</button>
      </li>
    );
  }
}

export default ListItem;
