import { useContext, useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "./../animation/animation-fadeInLeft.css";

const Nav = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Verifica si el desplazamiento es mayor a 50px para ocultar la barra de navegación.
    if (currentScrollPos > 20) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    position: "sticky", // Siempre usa "fixed" para mantener la barra en la parte superior
    top: isHeaderHidden ? "-100%" : "0", // Oculta la barra cuando isHeaderHidden es verdadero
    backgroundColor: isDarkTheme ? "black" : "white",
    color: isDarkTheme ? "white" : "black",
    transition: "top 0s ease",
    zIndex: "50",
  };

  return (
    <nav
      style={navStyle}
      className="py-8 w-full bg-white dark:bg-black text-black dark:text-white z-50 border-b-2
      px-1"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a
              href="https://www.linkedin.com/in/leonardo-gonzalez-379040261"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:text-gray-400 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/LeonAntGon"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:text-gray-400 hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <ul className="flex space-x-8 lg:space-x-16">
            <li>
              <Link exact to="/" className="hover:text-gray-400 transition duration-300">
                Casa
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-400 transition duration-300">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-gray-400 transition duration-300">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
