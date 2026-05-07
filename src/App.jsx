import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  // 3. Consume Context
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDark ? "app dark" : "app light"}>
      <div className="card">
        <h1>{isDark ? "" : " "}</h1>
        <p>Theme is currently: <strong>{isDark ? "Dark" : "Light"}</strong></p>
        <button onClick={toggleTheme}>
          Switch to {isDark ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}
