import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <section id='home-section'>
      <div className='grid-container grid-layout'>
          <div className='left-container'>
          <h1>Hi, I'm Pratish Joshi</h1>
          <h1>Full Stack Developer</h1>
          </div>
          <div className='right-container'>
            <img src='./assets/portfolio.jpg' alt='portfolio image'/>
            <div className='shadow'></div>
          </div>
      </div>
    </section>
  )
}

export default Home