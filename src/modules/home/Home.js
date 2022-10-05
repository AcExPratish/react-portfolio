import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div id="home-section">
      <div className="grid-container">
        <nav>
          <span>Pratish</span>
          <ul>
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
        </nav>
        <div className="grid-layout">
          <div className="left-container">
            <h1>Hi, I'm Pratish Joshi</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div className="right-container">
            <img src="./assets/portfolio.jpg" alt="portfolio image" className="img" />
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
