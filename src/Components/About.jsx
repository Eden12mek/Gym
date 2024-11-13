import React from 'react'
import AboutImage from '../images/about.png'

function About() {
  return (
    <div id='about' className='relative flex flex-row justify-center space-x-10 mb-28 pt-10'>

      <img src={AboutImage} alt="" className="w-full lg:w-1/2 mb-8 lg:mb-0 object-cover rounded-lg shadow-lg " />


      <div className='mt-40'>
        <h1 className='' style={{ color: 'crimson', fontSize: '50px', marginTop: '-40px' }}> LEARN MORE ABOUT </h1>
        <p style={{ color: 'crimson', fontSize: '50px' }}>US</p>
        <p className="text-white text-base md:text-lg leading-relaxed mt-8 text-justify max-w-xl">
          We’re not just a gym—we’re a community dedicated to helping you reach your fitness goals.
          With cutting-edge equipment, expert trainers, and a range of classes, we provide everything
          you need for a personalized fitness experience. Whether you're building strength, improving
          endurance, or seeking a healthier lifestyle, our supportive environment is here for you every
          step of the way. At Hena GYM, you're part of a team that celebrates every victory.
          Join us and discover what you’re truly capable of!
        </p>

        <button
          className="text-white"
          style={{
            backgroundColor: 'crimson',
            borderRadius: 10,
            width: 150,
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '15px',
            marginTop: '50px'
          }}
        >
          READ MORE</button>
      </div>

    </div>
  )
}

export default About
