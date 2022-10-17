import React from "react";
import "./home.scss";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiOutlineAlignRight } from 'react-icons/ai'
import Button from "../../reusables/Button";

const Home = () => {
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
    <div id="home">
      <div className="grid-container">
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
          <div id="navbar-sm">
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
        <div className="grid-layout">
          <div className="left-container">
            <h1>Pratish Joshi</h1>
            <h2>Full Stack Developer</h2>
            <Button title='View my work' icon={<BsFillArrowRightCircleFill className='icon' />} />
          </div>
          <div className="right-container">
            <img src="./assets/portfolio.png" alt="portfolio image" className="img" />
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
