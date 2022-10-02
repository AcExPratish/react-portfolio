import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <section id="home-section">
      <div className="grid-container">
        <nav>
          <span>Pratish</span>
          <ul>
            <li>
              <a href="#home-section">Home</a>
            </li>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="#portfolio-section">Portfolio</a>
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
            <img src="./assets/portfolio.jpg" alt="portfolio image" />
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
