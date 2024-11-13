import React, { useState } from 'react';
import AboutImage from '../images/about.png';

function About() {
  // State to toggle the visibility of additional text
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="about" className="relative flex flex-col lg:flex-row justify-center space-x-10 mb-28 pt-10 px-4 lg:px-10">
      <img
        src={AboutImage}
        alt=""
        className="w-full lg:w-1/2 mb-8 lg:mb-0 object-cover rounded-lg shadow-lg"
      />

      <div className="lg:mt-40">
        <h1
          className=""
          style={{ color: 'crimson', fontSize: '50px', marginTop: '-40px' }}
        >
          LEARN MORE ABOUT
        </h1>
        <p style={{ color: 'crimson', fontSize: '50px' }}>US</p>
        <p className="text-white text-base md:text-lg leading-relaxed mt-8 text-justify max-w-xl">
          We’re not just a gym—we’re a community dedicated to helping you reach your fitness goals.
          With cutting-edge equipment, expert trainers, and a range of classes, we provide everything
          you need for a personalized fitness experience. Whether you're building strength, improving
          endurance, or seeking a healthier lifestyle, our supportive environment is here for you every
          step of the way. At Hena GYM, you're part of a team that celebrates every victory.
          Join us and discover what you’re truly capable of!
        </p>

        {/* Conditionally render the additional text */}
        {showMore && (
          <p className="text-white text-base md:text-lg leading-relaxed mt-4 text-justify max-w-xl">
            We offer a variety of membership options, designed to fit your schedule and budget.
            From individual sessions to group training, you'll find the perfect plan for your needs.
            Plus, enjoy access to our state-of-the-art equipment, designed to give you the best workout experience.
            Whether you’re just starting out or looking to take your fitness to the next level, we’re here to help you succeed.
          </p>
        )}

        <button
          onClick={handleClick}
          className="text-white"
          style={{
            backgroundColor: 'crimson',
            borderRadius: 10,
            width: 150,
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '15px',
            marginTop: '50px',
          }}
        >
          {showMore ? 'SHOW LESS' : 'READ MORE'}
        </button>
      </div>
    </div>
  );
}

export default About;
