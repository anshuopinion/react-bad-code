import { useState } from "react";

function AsyncNatureMisuse() {
  const [count, setCount] = useState(0);

  const incrementAndLog = () => {
    setCount(count + 1);
    console.log(count); // This will log the previous value
  };

  return (
    <div>
      <h2>5. Async Nature Misuse</h2>
      <p>Count: {count}</p>
      <button onClick={incrementAndLog}>Increment and Log</button>
    </div>
  );
}

export default AsyncNatureMisuse;
