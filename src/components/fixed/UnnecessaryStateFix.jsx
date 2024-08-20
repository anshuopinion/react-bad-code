import React from "react";

function UnnecessaryStateFix() {
  const goodConstantValue = 42;

  return (
    <div>
      <h2>4. Using Constants Instead of Unnecessary State</h2>
      <p>Constant Value (Good): {goodConstantValue}</p>
    </div>
  );
}

export default UnnecessaryStateFix;
