import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar has-shadow px-5 py-3">
      <div className="navbar-brand">
        <a className="navbar-item is-size-4 has-text-weight-bold" href="#/">
          Bhargav
        </a>
      </div>

      <div id="nav-links" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="#home">
            Home
          </a>
          <a className="navbar-item" href="#/">
            About
          </a>
          <a className="navbar-item" href="#/">
            About
          </a>
          <a className="navbar-item" href="#/">
            Skills
          </a>
          <a className="navbar-item" href="#/">
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
