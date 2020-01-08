We change `ListItem` to look like this
```html
import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    };
  }

  handleInputChange = (event) => {
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
          checked={this.state.isDone}
          onChange={this.handleInputChange}
        />
        <span>{this.props.content}</span>
      </li>
    );
  }
}

export default ListItem;
```

Now, we control the state of the checkbox by having it explicitly in our `ListItem`'s `this.state`! And to change it, we have the `handleInputChange` function.