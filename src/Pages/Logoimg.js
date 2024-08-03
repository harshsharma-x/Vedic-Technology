import React from 'react';

import { motion } from 'framer-motion';
import logo1 from '../Designs/logo_img/client01.png';
import logo2 from '../Designs/logo_img/client02.png';
import logo3 from '../Designs/logo_img/client03.png';
import logo4 from '../Designs/logo_img/client04.png';
import logo5 from '../Designs/logo_img/client05.png';
import logo6 from '../Designs/logo_img/client06.png';
import logo7 from '../Designs/logo_img/client07.png';
import logo8 from '../Designs/logo_img/client08.png';
import logo9 from '../Designs/logo_img/client09.png';
import logo10 from '../Designs/logo_img/client10.png';
import logo11 from '../Designs/logo_img/client11.png';
import logo12 from '../Designs/logo_img/client12.png';
import logo13 from '../Designs/logo_img/client13.png';
import logo14 from '../Designs/logo_img/client14.png';
import logo15 from '../Designs/logo_img/client15.png';


const logoimg = [
  { name: 'client01', image: logo1 },
  { name: 'client02', image: logo2 },
  { name: 'client03', image: logo3 },
  { name: 'client04', image: logo4 },
  { name: 'client05', image: logo5 },
  { name: 'client06', image: logo6 },
  { name: 'client07', image: logo7 },
  { name: 'client08', image: logo8 },
  { name: 'client09', image: logo9 },
  { name: 'client10', image: logo10 },
  { name: 'client11', image: logo11 },
  { name: 'client12', image: logo12 },
  { name: 'client13', image: logo13 },
  { name: 'client14', image: logo14 },
  { name: 'client15', image: logo15 },
];


const LogoImg = () => {
  return (
    <div className="flex flex-col items-center bg-black justify-center min-h-screen w-screen p-4">
      <div className="text-center mb-6">
        <h1 className="text-xl  text-white font-bold p-2 ">
          — Clients
        </h1>
        <p className="text-lg text-white font-bold mt-2">
          Clients we would love to work with… See what we did here 😉
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 max-w-full">
        {logoimg.map((logo, index) => (
        <motion.div
          
        whileHover={{ scale: 1.1 }}
            key={index}
            className="flex justify-center items-center m-4 p-2 "
            style={{ maxWidth: '200px', maxHeight: '150px' }} 
          >
          
            <img
            
              src={logo.image}
              alt={logo.name}
              className="w-full h-auto object-contain "
            />
        </motion.div>
          
        ))}
      </div>
    </div>
  );
};


export default LogoImg;
