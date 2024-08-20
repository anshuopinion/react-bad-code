import React, { useState } from "react";

function PropsInitialization({ initialCount }) {
  // Bad: This won't update if the prop changes
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>7. Props Initialization</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default PropsInitialization;
