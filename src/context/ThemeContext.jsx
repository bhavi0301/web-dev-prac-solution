import { createContext, useState } from "react";

// 1. Create Context
export const ThemeContext = createContext();

// 2. Provider Component
export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false); // false = light, true = dark

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
