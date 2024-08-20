import React, { useState } from "react";

function ComplexComputation() {
  const expensiveComputation = () => {
    console.log("Expensive computation run");
    return Math.random();
  };

  // Bad: This will run on every render
  const [data, setData] = useState(expensiveComputation());

  return (
    <div>
      <h2>8. Complex Computation</h2>
      <p>Data: {data}</p>
      <button onClick={() => setData(expensiveComputation())}>Recompute</button>
    </div>
  );
}

export default ComplexComputation;
