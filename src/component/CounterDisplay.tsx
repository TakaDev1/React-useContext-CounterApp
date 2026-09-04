import React from "react";
import { useCoutner } from "../contexts/CounterContext";

const CounterDisplay = () => {
  const { count } = useCoutner();

  return (
    <div className="m-10">
      <p className="text-whtie text-3xl">
        Count:{" "}
        {<span className={`${count >= 0 ? "text-green-500" : "text-red-500"}`}>{count}</span>}
      </p>
    </div>
  );
};

export default CounterDisplay;
