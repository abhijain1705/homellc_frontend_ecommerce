import { createContext, useContext } from "react";

interface ScreenWidthContextType {
  width: number;
}
export const ContextSizeProvider = createContext<ScreenWidthContextType>({
  width: 0,
});

export const UseSizeContext = () => useContext(ContextSizeProvider);