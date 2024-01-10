import React, { useCallback, useContext } from "react";
import Particles from "react-tsparticles";
import Dark from "../../theme/particlesConfigDark";
import Light from "../../theme/particlesConfigLight";
import { loadFull } from "tsparticles";
import styles from "./ParticlesContainer.module.css";
import { ThemeContext } from "./../../context/ThemeContext"; // Asegúrate de que esta sea la ruta correcta a tu contexto

const ParticlesContainer = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const particleOptions = isDarkTheme ? Dark : Light;

  return (
    <Particles
      id="particles-component"
      className={styles.particlesComponent}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
};

export default ParticlesContainer;
