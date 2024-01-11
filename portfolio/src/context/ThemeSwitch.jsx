// ThemeSwitch.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Switch from "react-switch";
import { FaMoon, FaSun } from "react-icons/fa"; // Importa los íconos de sol y luna

const ThemeSwitch = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="fixed top-40 right-12 z-50">
      <Switch
        onChange={toggleTheme}
        checked={isDarkTheme}
        onColor="#2D3748"
        offColor="#E2E8F0"
        height={20}
        width={40}
        handleDiameter={18}
        // Personaliza los íconos para mostrar el sol y la luna y los centra con clases de Tailwind CSS
        checkedIcon={
          <div className="flex items-center justify-center h-5">
            <FaSun size={14} className="text-white" />
          </div>
        }
        uncheckedIcon={
          <div className="flex items-center justify-center h-5">
            <FaMoon size={14} className="text-gray-800" />
          </div>
        }
      />
    </div>
  );
};

export default ThemeSwitch;
