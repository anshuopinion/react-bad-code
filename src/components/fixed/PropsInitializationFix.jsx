import { useState, useEffect } from "react";

function PropsInitializationFix({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  return (
    <div>
      <h2>7. Proper Props Initialization</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default PropsInitializationFix;
