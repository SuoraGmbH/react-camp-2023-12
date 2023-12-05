import * as React from "react";
import { useState } from "react";

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  // Die komische Syntax hierdrüber ist "array destructuring".
  // Das ist eine kurzschreibweise für das folgende:
  //
  // const stateArray = useState(0);
  // const count = stateArray[0];
  // const setCount = stateArray[1];

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>The count is currently {count}</p>
    </div>
  );
};

export default Counter;
