"use client";
import { useReducer } from "react";

const reducer = (state, action) => {
  console.log("state ", state, action);
  return {
    ...state,
    books: action.payload,
  };
};
const AboutPage = () => {
  const bookName = [{ name: "book1" }, { name: "book2" }];
  const [bookState, dispatch] = useReducer(reducer, {
    books: bookName,
    bookType: "literature",
  });
  const handleSubmit = () => {
    dispatch({
      state: "state",
      payload: {
        books: [{ name: "dbook1" }, { name: "dbook2" }],
        bookType: "dliterature",
      },
    });
  };
  console.log("+++++++++++= ", bookState);
  return (
    <div className="ml-[400px] mt-24 ">
      <p>refucer</p>
      <button onClick={() => handleSubmit()}>button</button>
    </div>
  );
};

export default AboutPage;
//=======================================================================
// import React, { createContext, useReducer } from "react";

// // Initial state
// const initialState = { count: 0 };

// // Reducer function
// function counterReducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     case "RESET":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

// // Create context
// export const CounterContext = createContext();

// // Context provider
// export function CounterProvider({ children }) {
//   const [state, dispatch] = useReducer(counterReducer, initialState);

//   return (
//     <CounterContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CounterContext.Provider>
//   );
// }
