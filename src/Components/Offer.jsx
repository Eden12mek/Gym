import React from 'react';
import Offerimage from '../images/offer.png';

function Offer() {
  return (
    <div className="relative">
      <img src={Offerimage} alt="offer image" className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white" style={{ fontSize: '80px', fontWeight: 'normal' }}>
          A BIG <span style={{ color: 'crimson' }}>OFFER</span> FOR
        </h1>
        <p style={{ color: 'white', fontSize: '80px', fontWeight: 'normal', marginTop: '-20px' }}>
          THIS MONTH
        </p>
        <p style={{ color: 'white' }}>Discover Your Potential, Embrace Your Strength With This Offer</p>
        <button
          className="text-white"
          style={{
            backgroundColor: 'crimson',
            borderRadius: 4,
            width: 150,
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '25px',
            marginTop: '30px'
          }}
        >
          JOIN NOW
        </button>
      </div>
    </div>
  );
}

export default Offer;
