import React, { useState } from "react";

function LoopStateUpdatesFix() {
  const [items, setItems] = useState([]);

  const addItemsGood = () => {
    setItems((prevItems) => [
      ...prevItems,
      ...Array(prevItems.length).fill("new item"),
    ]);
  };

  return (
    <div>
      <h2>2. Efficient Loop State Updates</h2>
      <p>Items: {items.length}</p>
      <button onClick={addItemsGood}>Add Items (Good)</button>
    </div>
  );
}

export default LoopStateUpdatesFix;
