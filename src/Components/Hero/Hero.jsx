import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.jpg'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1> Your Gateway to Success Coding, and Career Transformation </h1>
            <p> Master Programming with Expert Guidance. Prepare for the Future with Comprehensive Training for College Students and Professionals. Switch to a Career in Data Science, Analytics, and Web Development with Confidence! </p>
            <button className='btn'> Explore More <img src={dark_arrow} alt=''></img> </button>
        </div>
    </div>
  )
}

export default Hero