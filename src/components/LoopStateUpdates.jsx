import React, { useState } from "react";

function LoopStateUpdates() {
  const [items, setItems] = useState([]);

  const addItemsBad = () => {
    // Bad: This may cause unnecessary re-renders
    items.forEach(() => {
      setItems([...items, "new item"]);
    });
  };

  return (
    <div>
      <h2>2. Loop State Updates</h2>
      <p>Items: {items.length}</p>
      <button onClick={addItemsBad}>Add Items (Bad)</button>
    </div>
  );
}

export default LoopStateUpdates;
