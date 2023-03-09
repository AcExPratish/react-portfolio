import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Button from "../../reusables/Button";
import "./home.scss"

const Home = () => {
    return (
        <div id="home">
            <div className="grid-layout">
                <div className="left-container">
                    <h1>Pratish Joshi</h1>
                    <h2>Full Stack Developer</h2>
                    <Button title='View my work' icon={<BsFillArrowRightCircleFill className='icon' />} />
                </div>
                <div className="right-container">
                    <img src="./assets/portfolio.png" alt="portfolio_image" className="img" />
                    <div className="shadow"></div>
                </div>
            </div>
        </div>
    )
}

export default Home