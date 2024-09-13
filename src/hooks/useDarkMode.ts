import { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

type TContextType = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};

export const DarkModeContext = createContext<TContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return {
    isDarkMode,
    setIsDarkMode,
  };
};
