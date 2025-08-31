'use client'
import { useContext } from "react";
import { CounterContext } from "./CounterContext";


export default function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div >
      <h2>Count: {state.count}</h2>
      <button  onClick={() => dispatch({ type: "INCREMENT" })}>+ Increment</button>
      <button  onClick={() => dispatch({ type: "DECREMENT" })}>- Decrement</button>
      <button  onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
