import React from "react";
import "./home.scss";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiOutlineAlignRight } from 'react-icons/ai'
import Button from "../../reusables/Button";

const Home = () => {
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
          <ul id="navbar-sm">
            <AiOutlineAlignRight />
          </ul>
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
