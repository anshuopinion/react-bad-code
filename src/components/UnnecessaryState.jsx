import React, { useState } from "react";

function UnnecessaryState() {
  // Bad: Unnecessary use of state
  const [constantValue, setConstantValue] = useState(42);

  return (
    <div>
      <h2>4. Unnecessary State</h2>
      <p>Constant Value: {constantValue}</p>
    </div>
  );
}

export default UnnecessaryState;
