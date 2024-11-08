import React from 'react';

function Featurebox({ image, title }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={image}
        alt={title}
        className="w-1/2 h-auto object-contain mb-40" // Center and control the size of the image
      />
      <h3 className="text-white text-xl text-center">{title}</h3>
    </div>
  );
}

export default Featurebox;
