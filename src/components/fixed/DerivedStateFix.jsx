import React, { useState, useMemo } from "react";

function DerivedStateFix() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  const fullName = useMemo(
    () => `${firstName} ${lastName}`,
    [firstName, lastName]
  );

  const updateNames = () => {
    setFirstName("Jane");
    setLastName("Smith");
  };

  return (
    <div>
      <h2>10. Computed Values Instead of Derived State</h2>
      <p>Full Name: {fullName}</p>
      <button onClick={updateNames}>Change Names</button>
    </div>
  );
}

export default DerivedStateFix;
