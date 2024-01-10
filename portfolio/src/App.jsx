// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa Routes y Route

import Nav from "./frames/Nav";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitch from "./context/ThemeSwitch";
import Casa from "./frames/Home";
import Proyectos from "./frames/Projects";
import Contacto from "./frames/Contacto";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Nav />
          <ThemeSwitch />
          <Routes> {/* Usa Routes en lugar de Switch */}
            <Route path="/" element={<Casa />} />
            <Route path="/projects" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
