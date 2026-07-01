import { useState } from "react";

export const useCounter = (initialValue: number = 5) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter((prev) => prev + 1);
  };

  const handleSubstract = () => {
    if (counter <= 0) return;
    setCounter((prev) => prev - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    // Values
    counter,

    // Methods | Actions
    handleAdd,
    handleSubstract,
    handleReset,
  };
};
