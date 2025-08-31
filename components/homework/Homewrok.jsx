import { useContext } from "react";
import ThemeContext from "../provider/ThemeContext";

const Homework = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>home work</p>
      <div>
        <p>Current theme: {theme}</p>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{ marginTop: "10px" }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Homework;
