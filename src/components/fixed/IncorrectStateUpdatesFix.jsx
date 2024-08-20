import { useState } from "react";

function IncorrectStateUpdatesFix() {
  const [count, setCount] = useState(0);

  const incrementGood = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>1. Correct State Updates</h2>
      <p>Count: {count}</p>
      <button onClick={incrementGood}>Increment (Good)</button>
    </div>
  );
}

export default IncorrectStateUpdatesFix;
