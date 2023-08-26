import { useState } from "react";

export default function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue);
  const increment = () => {
    setValue(value + 1);
  };
  const directDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const functionalDecrement = () => {
    if (value > 0) {
      setValue((p) => p - 1);
    }
  };

  const reset = () => {
    setValue(0);
  };

  return [value, increment, directDecrement, functionalDecrement, reset];
}
