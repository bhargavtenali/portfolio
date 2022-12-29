import React from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";

function App() {
  return (
    <div className="bg-container">
      <div className="app-container">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Qualification />
      </div>
    </div>
  );
}

export default App;
