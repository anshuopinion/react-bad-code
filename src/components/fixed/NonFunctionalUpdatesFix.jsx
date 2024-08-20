import React, { useState } from "react";

function NonFunctionalUpdatesFix() {
  const [count, setCount] = useState(0);

  const incrementMultipleGood = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>9. Functional Updates</h2>
      <p>Count: {count}</p>
      <button onClick={incrementMultipleGood}>Increment Multiple (Good)</button>
    </div>
  );
}

export default NonFunctionalUpdatesFix;
