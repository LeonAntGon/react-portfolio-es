import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ParticlesContainer from "../components/ParticlesContainer/ParticlesContainer";
import "./../animation/animate-typewriter.css";
import "./../animation/animate-fadeIn4.css";


const Home = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const backgroundClass = isDarkTheme ? "bg-black" : "bg-white";
  const textClass = isDarkTheme ? "text-white" : "text-black";

  return (
    <main id="home" className={`h-screen relative ${backgroundClass}`}>
      <ParticlesContainer />
      <div className="flex justify-center items-center h-screen">
        <div
          className={`flex flex-col justify-center items-center relative z-10`}
        >
          <h1
            className={`font-bold ${textClass} typewriter-animation
            text-2xl md:text-4xl md:pb-1`}>
            Hola! Soy Leonardo
          </h1>

          <h2
            className={`${textClass} font-semibold animate-fadeIn4 mt-10
            text-2xl md:text-4xl `}
          >
            Soy desarrollador web Front-End
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Home;