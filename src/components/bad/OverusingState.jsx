import React, { useState } from "react";

function OverusingState() {
  // Bad: Too many related state variables
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  return (
    <div>
      <h2>6. Overusing State</h2>
      <p>Loading: {isLoading ? "Yes" : "No"}</p>
      <p>Error: {error || "None"}</p>
      <p>Data: {data || "No data"}</p>
      <p>Page: {page}</p>
    </div>
  );
}

export default OverusingState;
