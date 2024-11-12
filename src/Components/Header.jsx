import React from 'react';
import banner from '../images/banner.png';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='header' className="relative w-full h-screen">
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
        <p className="details text-white text-lg" style={{fontSize:'20px'}}>Build Your Body And Fitness With Professional Touch</p>
        <button
          className="text-white"
          style={{
            backgroundColor: 'crimson',
            borderRadius: 10,
            width: 150,
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '20px',
            marginTop: '30px'
          }}
        >
          JOIN US</button>
      </div>
    </div>

  );
}

export default Header;
