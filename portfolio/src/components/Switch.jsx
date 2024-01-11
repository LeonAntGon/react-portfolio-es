import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Importa el contexto de tema

const ThemeSwitch = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Obtén el estado y la función para cambiar el tema

  return (
    <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        checked={isDarkTheme}
        onChange={toggleTheme}
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"></label>
    </div>
  );
};

export default ThemeSwitch;
