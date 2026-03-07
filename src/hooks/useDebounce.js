import { useState, useEffect } from "react";

export const useDebounce = (value, delay = 500) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer); // cleanup on next keypress
  }, [value, delay]);

  return debounced;
};
