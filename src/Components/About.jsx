import React from 'react'
import AboutImage from '../images/about.png'

function About() {
  return (
    <div className='relative flex flex-row space-x-10'>

      <img src={AboutImage} alt="" />


      <div>
        <h1 className='' style={{ color: 'crimson', fontSize: '50px', marginBottom: '-30px' }}> LEARN MORE ABOUT </h1>
        <p style={{ color: 'crimson', fontSize: '50px' }}>US</p>
        <p className='text-white'>We’re not just a gym—we’re a community dedicated to helping you reach your fitness goals.
          With cutting-edge equipment, expert trainers, and a range of classes, we provide everything
          you need for a personalized fitness experience. Whether you're building strength, improving
          endurance, or seeking a healthier lifestyle, our supportive environment is here for you every
          step of the way.At Hena GYM, you're part of a team that celebrates every victory.
          Join us and discover what you’re truly capable of!</p>
        <button
          className="text-white"
          style={{
            backgroundColor: 'crimson',
            borderRadius: 5,
            width: 150,
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '25px',
            marginTop: '30px'
          }}
        >
          READ MORE</button>
      </div>

    </div>
  )
}

export default About
