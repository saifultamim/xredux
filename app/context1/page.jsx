'use client'
import Counter from "@/components/context1/Counter";
import { CounterProvider } from "@/components/context1/CounterContext";
import React from "react";

const Context1Page = () => {
  return (
  <div className="ml-96 mt-48">
      <CounterProvider>
      <div>
        <h1>Context API + useReducer Example</h1>
        <Counter />
      </div>
    </CounterProvider>
  </div>
  );
};

export default Context1Page;
