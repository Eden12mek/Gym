import React from 'react';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';
import Featurebox from './Featurebox';

function Features(props) {
  return (
    <div className="container text-white px-4 ml-10 mb-20">
      <h1 className="text-center text-5xl font-bold pt-20 space-x-2">FEATURES</h1>
      <div className="container flex flex-col lg:flex-row lg:justify-between gap-8 pt-8">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center w-full lg:w-1/4 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <Featurebox image={fimage1} title={<span className="font-bold text-3xl">WeightLifting</span>} />
          <p className="text-lg text-center mt-6">Push Your Limits, Build Strength</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center w-full lg:w-1/4 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <Featurebox image={fimage2} title={<span className="font-bold text-3xl">Specific Muscle</span>} />
          <p className="text-lg text-center mt-6">Target Specific Muscles For Growth</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center w-full lg:w-1/4 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <Featurebox image={fimage3} title={<span className="font-bold text-3xl">Flex Your Muscle</span>} />
          <p className="text-lg text-center mt-6">Enhance Your Flexibility and Mobility</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center w-full lg:w-1/4 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <Featurebox image={fimage4} title={<span className="font-bold text-3xl">Cardio Exercise</span>} />
          <p className="text-lg text-center mt-6">Boost Your Endurance With Cardio</p>
        </div>
        
      </div>
    </div>
  );
}

export default Features;
