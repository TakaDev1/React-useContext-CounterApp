import React from "react";
import { useCoutner } from "../contexts/CounterContext";

const CounterButtons = () => {
  const { handleIncrement, handleDecrement, handleReset } = useCoutner();

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterButtons;
