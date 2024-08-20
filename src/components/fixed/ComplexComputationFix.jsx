import React, { useState, useMemo } from "react";

function ComplexComputationFix() {
  const [dependency, setDependency] = useState(0);

  const expensiveComputation = (dep) => {
    console.log("Expensive computation run");
    return Math.random() + dep;
  };

  const data = useMemo(() => expensiveComputation(dependency), [dependency]);

  return (
    <div>
      <h2>8. Memoized Complex Computation</h2>
      <p>Data: {data}</p>
      <button onClick={() => setDependency((prev) => prev + 1)}>
        Update Dependency
      </button>
    </div>
  );
}

export default ComplexComputationFix;
