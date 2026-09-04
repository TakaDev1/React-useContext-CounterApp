import React, { createContext, useContext, useState, type ReactNode } from "react";

interface CounterContextInterface {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const CounterContext = createContext<CounterContextInterface | undefined>(undefined);

const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <CounterContext.Provider value={{ count, handleIncrement, handleDecrement }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

const useCoutner = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("CoutnerContextが未定義です");
  }

  return context;
};

export { CounterProvider, useCoutner };
