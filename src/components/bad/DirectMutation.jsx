import React, { useState } from "react";

function DirectMutation() {
  const [user, setUser] = useState({ name: "John", age: 30 });

  const updateAgeBad = () => {
    // Bad: Direct mutation
    user.age = 31; // This won't trigger a re-render
  };

  return (
    <div>
      <h2>3. Direct Mutation</h2>
      <p>
        User: {user.name}, Age: {user.age}
      </p>
      <button onClick={updateAgeBad}>Update Age (Bad)</button>
    </div>
  );
}

export default DirectMutation;
