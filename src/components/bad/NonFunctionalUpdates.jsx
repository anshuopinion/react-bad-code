import { useState } from "react";

function NonFunctionalUpdates() {
  const [count, setCount] = useState(0);

  const incrementMultiple = () => {
    // Bad: This might use stale state
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h2>9. Non-Functional Updates</h2>
      <p>Count: {count}</p>
      <button onClick={incrementMultiple}>Increment Multiple</button>
    </div>
  );
}

export default NonFunctionalUpdates;
