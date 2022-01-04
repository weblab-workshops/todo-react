We change `ListItem` to look like this
```html
import React, { useState } from "react";

const ListItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.checked;
    setIsDone(value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleInputChange}
      />
      <span>{props.content}</span>
    </li>
  );
}

export default ListItem;
```

Now, we control the state of the checkbox by having it explicitly in our `ListItem`'s `isDone` state! And to change it, we have the `handleInputChange` function.
