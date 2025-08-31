import React, { createContext, useReducer } from "react";

// Initial state
const initialState = { count: 0 };

// Reducer function
function counterReducer(state, action) {
    console.log('state ',state)
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

// Create context
export const CounterContext = createContext();

// Context provider
export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
