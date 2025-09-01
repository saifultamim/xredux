"use client";
import { decrement, increment } from "@/components/counter/CounterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxPage = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  console.log("redux counters ", counters);
  const handleIncrement = (counterId) => {
    console.log("handleIncremnet", counterId);
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    console.log("handleDecrement", counterId);
    dispatch(decrement(counterId));
  };
  const totalCount = counters?.reduce((sum, curr) => sum + curr.value, 0);
  console.log("++++++++++ ", totalCount);
  return (
    <div>
      <p>total count : {totalCount}</p>
      <div className="text-white">
        {counters?.map((counter) => (
          <div
            className="border border-red-600 space-y-9 ml-48 px-9"
            key={counter.id}
          >
            <p>{counter?.value}</p>
            <button
              onClick={() => {
                handleIncrement(counter.id);
              }}
            >
              Increment
            </button>
            <br />
            <button
              onClick={() => {
                handleDecrement(counter.id);
              }}
            >
              {" "}
              Decremtn
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduxPage;
