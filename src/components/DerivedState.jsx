import React, { useState, useEffect } from "react";

function DerivedState() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  // Bad: This should be a computed value, not state
  const [fullName, setFullName] = useState(`${firstName} ${lastName}`);

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return (
    <div>
      <h2>10. Derived State</h2>
      <p>Full Name: {fullName}</p>
      <button onClick={() => setFirstName("Jane")}>Change First Name</button>
      <button onClick={() => setLastName("Smith")}>Change Last Name</button>
    </div>
  );
}

export default DerivedState;
