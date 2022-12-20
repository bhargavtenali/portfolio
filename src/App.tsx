import React from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-container">
      <div className="app-container">
        <Navbar />
        <Home />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
