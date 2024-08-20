import React, { useState } from "react";

function DirectMutationFix() {
  const [user, setUser] = useState({ name: "John", age: 30 });

  const updateAgeGood = () => {
    setUser((prevUser) => ({ ...prevUser, age: 31 }));
  };

  return (
    <div>
      <h2>3. Immutable State Updates</h2>
      <p>
        User: {user.name}, Age: {user.age}
      </p>
      <button onClick={updateAgeGood}>Update Age (Good)</button>
    </div>
  );
}

export default DirectMutationFix;
