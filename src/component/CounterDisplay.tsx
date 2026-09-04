import React from "react";
import { useCoutner } from "../contexts/CounterContext";

const CounterDisplay = () => {
  const { count } = useCoutner();

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default CounterDisplay;
