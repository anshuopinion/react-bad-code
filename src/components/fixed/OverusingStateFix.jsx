import { useReducer } from "react";

function OverusingStateFix() {
  const initialState = { isLoading: false, error: null, data: null, page: 1 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, isLoading: true, error: null };
      case "FETCH_SUCCESS":
        return { ...state, isLoading: false, data: action.payload };
      case "FETCH_ERROR":
        return { ...state, isLoading: false, error: action.payload };
      case "SET_PAGE":
        return { ...state, page: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>6. Using useReducer for Complex State</h2>
      <p>Loading: {state.isLoading ? "Yes" : "No"}</p>
      <p>Error: {state.error || "None"}</p>
      <p>Data: {state.data || "No data"}</p>
      <p>Page: {state.page}</p>
      <button
        onClick={() => dispatch({ type: "SET_PAGE", payload: state.page + 1 })}
      >
        Next Page
      </button>
    </div>
  );
}

export default OverusingStateFix;
