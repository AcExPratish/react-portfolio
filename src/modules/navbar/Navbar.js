import React from "react";
import "./navbar.scss";
import { AiOutlineAlignRight } from 'react-icons/ai'

const Navbar = () => {
  const onClickOpenListener = () => {
    const element = document.getElementById('navbar-open-state')
    element.classList.remove('d-none')
    element.classList.add('d-flex')
  }

  const onClickCloseListener = () => {
    const element = document.getElementById('navbar-open-state')
    element.classList.remove('d-flex')
    element.classList.add('d-none')
  }

  return (
    <div id="navbar">
      <nav>
        <span className="signature">Pratish</span>
        <ul id="navbar-lg">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#blog">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div id="navbar-sm" className="d-none">
          <div id="navbar-icon">
            <AiOutlineAlignRight onClick={onClickOpenListener} />
          </div>
        </div>
        <div id="navbar-open-state" className="d-none" onClick={onClickCloseListener}>
          <ul>
            <li onClick={onClickCloseListener}>
              <a href="#home">Home</a>
            </li>
            <li onClick={onClickCloseListener}>
              <a href="#project">Projects</a>
            </li>
            <li onClick={onClickCloseListener}>
              <a href="#blog">Blogs</a>
            </li>
            <li onClick={onClickCloseListener}>
              <a href="#contact">Contact</a>
            </li>
            {/* <li onClick={onClickCloseListener}>
                <a href="#close">Close</a>
              </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
