`TodoList.js`:
```html
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
      <div>
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
```

`ListItem.js`:
```html
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
```
To keep IDs, I decided to make a helper function that will increment a counter and give its new value to me. That way, I know it's unique every time. I use that in `submitTodo`. Then, `deleteTodo` takes an ID as input, and filters the to-do list to get rid of that to-do. We don't pass it directly to each `ListItem`, we actually define an anonymous function everytime, whose only job is to call `deleteTodo` with a specific ID!

Then in `ListItem`, we simply call that `deleteTodo` prop passed when we click on the X.