import React, {useEffect, useState} from "react";
import Darkpng from "./assets/website/dark-mode-button.png";
import Lightpng from "./assets/website/light-mode-button.png";

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <div className="relative ">
        <img
          src={Darkpng}
          alt=""
          className={`w-12 cursor-pointer transition-all duration-500 absolute right-0 z-[10] ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <img
          src={Lightpng}
          alt=""
          className={`w-12 cursor-pointer  `}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </>
  );
}

export default DarkMode;
