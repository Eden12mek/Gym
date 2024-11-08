import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Features from './Components/Features';
import Offer from './Components/Offer';

function App() {
  return (
    <div className="App " style={{backgroundColor:'black'}}>
      <Header /> {/* This includes the Navbar and banner */}
      <Features />
      <Offer />
    </div>
  );
}

export default App;
