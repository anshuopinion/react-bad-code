import { useState, useEffect } from "react";

function AsyncNatureMisuseFix() {
  const [count, setCount] = useState(0);

  const incrementAndLogGood = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("Good:", newCount);
      return newCount;
    });
  };

  return (
    <div>
      <h2>5. Proper Async State Handling</h2>
      <p>Count: {count}</p>
      <button onClick={incrementAndLogGood}>Increment and Log (Good)</button>
    </div>
  );
}

export default AsyncNatureMisuseFix;
