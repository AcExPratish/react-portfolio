import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div id="navbar-section">
        <div className="grid-container">
            <div>
            </div>
            <div>
            <ul className="uppercase">
            <li>
              <a href="#home-section">Home</a>
            </li>
            <li>
              <a href="#project-section">Projects</a>
            </li>
            <li>
              <a href="#blog-section">Blogs</a>
            </li>
            <li>
              <a href="#contact-section">Contact</a>
            </li>
            <li>
              <a href="#footer-section">Footer</a>
            </li>
          </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
