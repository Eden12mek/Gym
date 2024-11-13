import React, { useState } from 'react';
import banner from '../images/banner.png';
import Navbar from './Navbar';

function Header() {
  // State to manage button text and width
  const [isJoined, setIsJoined] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  // Handle button click event
  const handleButtonClick = () => {
    setIsJoined(true); // Change the text when the button is clicked
  };

  return (
    <div id="header" className="relative w-full h-screen">
      <Navbar />
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full space-y-4">
        <h2 className="text-white text-5xl font-bold">STEP UP YOUR</h2>
        <h1 className="text-white text-8xl font-bold">
          <span style={{ color: 'crimson' }}>FITNESS</span> WITH US
        </h1>
        <p className="details text-white text-lg" style={{ fontSize: '20px' }}>
          Build Your Body And Fitness With Professional Touch
        </p>
        <button
          onClick={handleButtonClick} // Trigger handleButtonClick on button click
          className="text-white hover:scale-105"
          style={{
            backgroundColor: 'crimson',
            borderRadius: 10,
            width: isJoined ? '250px' : '150px',
            height: '50px',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '20px',
            marginTop: '30px',
            transition: 'width 0.5s ease, transform 0.3s ease', // Include transform in the transition
            transform: `${isJoined ? 'translateX(20px)' : 'none'} scale(${isHovered ? 1.05 : 1})`, // Apply scale effect
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isJoined ? "Welcome To Hena's Gym" : "JOIN US"}
        </button>

      </div>
    </div>
  );
}

export default Header;
