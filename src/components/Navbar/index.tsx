import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Resume from "../../assets/pdf/resume.pdf";

const Navbar = () => {
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
          <Link className="navbar-item" smooth to="/#home">
            Home
          </Link>
          <Link className="navbar-item" smooth to="/#about">
            About
          </Link>
          <Link className="navbar-item" smooth to="#skills">
            Skills
          </Link>
          <a
            className="navbar-item"
            href={Resume}
            download="Bhargav-Resume"
            target="_blank"
          >
            Resume
          </a>
          <a className="navbar-item" href="#/">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
