// import React from 'react';
// import banner from '../images/banner.png';
// import Navbar from './Navbar';

// function Header() {
//   return (
//     <div className="header-container relative w-full h-screen">
//       <Navbar />
//       <img
//         src={banner}
//         alt="Banner"
//         className="w-full h-full object-cover absolute top-0 left-0 z-0"
//       />
//       <div className="relative z-10 flex flex-col justify-center items-center w-full h-full space-y-4">
//         <h2 className="text-white text-5xl font-bold">STEP UP YOUR</h2>
//         <h1 className="text-white text-8xl font-bold">
//           <span style={{ color: 'crimson' }}>FITNESS</span> WITH US
//         </h1>
//         <p className="details text-white text-lg ">Build Your Body And Fitness With Professional Touch</p>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React from 'react';
import banner from '../images/banner.png';
import Navbar from './Navbar';

function Header() {
  return (
    <div className="relative w-full h-screen">
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
        <p className="details text-white text-lg">Build Your Body And Fitness With Professional Touch</p>
      </div>
    </div>
  );
}

export default Header;
