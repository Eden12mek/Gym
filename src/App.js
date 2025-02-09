import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Features from './Components/Features';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App " style={{ backgroundColor: 'black' }}>
      <Header /> {/* This includes the Navbar and banner */}
      <Features />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}

export default App;
