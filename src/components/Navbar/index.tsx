import React, { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import Resume from "../../assets/pdf/resume.pdf";

const Navbar = () => {
  const [activeClass, activeClassHandler] = useState("/#home");
  const navbarClikcHandler = (e: any) => {
    activeClassHandler(e.target.getAttribute("href"));
  };
  return (
    <nav
      style={{ height: "10vh" }}
      className="navbar has-shadow is-fixed-top px-5"
    >
      <div className="navbar-brand">
        <a className="navbar-item is-size-4 has-text-weight-bold" href="#/">
          Bhargav
        </a>
      </div>
      <div id="nav-links" className="navbar-menu">
        <div className="navbar-end">
          <Link
            className={`navbar-item is-tab ${
              activeClass === "/#home" ? "is-active" : ""
            }`}
            smooth
            to="#home"
            onClick={navbarClikcHandler}
          >
            Home
          </Link>
          <Link
            className={`navbar-item is-tab ${
              activeClass === "/#about" ? "is-active" : ""
            }`}
            smooth
            to="#about"
            onClick={navbarClikcHandler}
          >
            About
          </Link>
          <Link
            className={`navbar-item is-tab ${
              activeClass === "/#skills" ? "is-active" : ""
            }`}
            smooth
            to="#skills"
            onClick={navbarClikcHandler}
          >
            Skills
          </Link>
          <Link
            className={`navbar-item is-tab ${
              activeClass === "/#qualification" ? "is-active" : ""
            }`}
            smooth
            to="#qualification"
            onClick={navbarClikcHandler}
          >
            Education & Experience
          </Link>
          <a
            className="navbar-item is-tab"
            href={Resume}
            download="Bhargav-Resume"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
