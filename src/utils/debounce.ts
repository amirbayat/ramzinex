import { useCallback } from "react";

export const Debounce = (
  fn: (...args: any[]) => void,
  delay: number,
  dependencies: any[] = []
) => {
  let timerId: ReturnType<typeof setTimeout>;

  const debouncedFunction = useCallback(function (...args: unknown[]) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  }, dependencies);
  return debouncedFunction;
};
