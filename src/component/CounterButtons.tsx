import React from "react";
import { useCoutner } from "../contexts/CounterContext";

const CounterButtons = () => {
  const { handleIncrement, handleDecrement, handleReset } = useCoutner();

  return (
    <div>
      <button
        onClick={handleIncrement}
        className="w-8 h-8 rounded-full bg-blue-300 text-black hover:opacity-80 cursor-pointer mr-1 text-xl"
      >
        +
      </button>
      <button
        onClick={handleDecrement}
        className="w-8 h-8 rounded-full bg-red-300 text-black hover:opacity-80 cursor-pointer mr-1 text-xl"
      >
        -
      </button>
      <button
        onClick={handleReset}
        className="w-20 py-1 bg-gray-200 text-black rounded-full hover:opacity-80 cursor-pointer"
      >
        Reset
      </button>
    </div>
  );
};

export default CounterButtons;
