import React, { useState } from "react";

function IncorrectStateUpdates() {
  const [count, setCount] = useState(0);

  const incrementBad = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h2>1. Incorrect State Updates</h2>
      <p>Count: {count}</p>
      <button onClick={incrementBad}>Increment (Bad)</button>
    </div>
  );
}

export default IncorrectStateUpdates;
