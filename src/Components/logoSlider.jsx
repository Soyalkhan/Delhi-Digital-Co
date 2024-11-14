import React from 'react';
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';
import b5 from '../assets/b5.png';
import b6 from '../assets/b6.png';
import b7 from '../assets/b7.png';
import b8 from '../assets/b8.png';
import b9 from '../assets/b9.png';
import b10 from '../assets/b10.png';
import b11 from '../assets/b11.png';
import b12 from '../assets/b12.png';
import b13 from '../assets/b13.png';
import b14 from '../assets/b14.png';
import b15 from '../assets/b15.png';
import b16 from '../assets/b16.png';
import b17 from '../assets/b17.png';
import b18 from '../assets/b18.png';
import b19 from '../assets/b19.png';
import b20 from '../assets/b20.png';
import b21 from '../assets/b21.png';
import b22 from '../assets/b22.png';
import b23 from '../assets/b23.png';
import b24 from '../assets/b24.png';
import b25 from '../assets/b25.png';
import b26 from '../assets/b26.png';
import b27 from '../assets/b27.png';
import b28 from '../assets/b28.png';
import b29 from '../assets/b29.png';
import b30 from '../assets/b30.png';
import b31 from '../assets/b31.png';
import b32 from '../assets/b32.png';
import b33 from '../assets/b33.png';
import b34 from '../assets/b34.png';
import b35 from '../assets/b35.png';
import b36 from '../assets/b36.png';
import b37 from '../assets/b37.png';
import b38 from '../assets/b38.png';
import b39 from '../assets/b39.png';
import b40 from '../assets/b40.png';
import b41 from '../assets/b41.png';
import b42 from '../assets/b42.png';
import b43 from '../assets/b43.png';
import b44 from '../assets/b44.png';
import b45 from '../assets/b45.png';

const images = [
  b1, b2, b3, b4, b5, b6, b7, b8, b9, b10,
  b11, b12, b13, b14, b15, b16, b17, b18, b19, b20,
  b21, b22, b23, b24, b25, b26, b27, b28, b29, b30,
  b31, b32, b33, b34, b35, b36, b37, b38, b39, b40,
  b41, b42, b43, b44, b45
];

const LogoSlider = () => {
  return (
    <div className="w-full bg-black py-10">
        <h1 className=' text-center text-7xl text-white font-black	mb-14'>Brands trusted us</h1>
      <div className="relative overflow-hidden">
        {/* Animated Scrolling Wrapper */}
        <div className="flex space-x-4 animate-scroll whitespace-nowrap">
          {images.concat(images).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Logo ${index + 1}`}
              className="w-32 h-32 inline-block object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
