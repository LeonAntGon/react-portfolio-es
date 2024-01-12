// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Routes y Route
import Nav from "./frames/Nav";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitch from "./context/ThemeSwitch";
import Home from "./frames/Home";
import Proyectos from "./frames/Projects";
import Contacto from "./frames/Contacto";
import MyHelmet from "./frames/MyHelmet";


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <MyHelmet />
          <Nav />
          <ThemeSwitch />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Home/>} />
            <Route path="/projects" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
