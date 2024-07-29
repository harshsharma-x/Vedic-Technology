import React, { useState } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Services from './Services';
import WhyUS from './WhyUs';
import Modal from 'react-modal';
import Goal from './Goal';
import Logo from '../Designs/Logo1.png';
import Footer from '../Components/Footer'
import Vedic from '../Components/wearevedic'
import Contact from '../Components/LetsTalk'

const Home = () => {


  return (
    <>
      <div className="bg-gradient-to-r z-100 from-green-100 to-pink-200 min-h-screen flex flex-col md:flex-row gap-2 p-5 z-0">
        <div className="md:w-1/2 flex justify-center items-center text-center md:text-left">
          <motion.div
            className="ml-4 md:ml-[15%] py-10 px-6 md:py-20 md:px-14"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-red-500 font-bold flex items-center justify-center md:justify-start">
              <IoRemoveOutline className="text-4xl md:text-7xl mr-2" />
              Best Web Design & Development Agency
            </p>
            <h1 className="text-4xl md:text-7xl text-blue-950 font-bold mt-4 leading-tight md:leading-[75px]">
              Innovative <br />
              Website Design & <br />
              Development
            </h1>
            <p className="text-blue-900 font-semibold mt-6 md:mt-14 text-sm md:text-lg">
              Discover Bespoke Website Design and Development in Bihar. Blending
              creativity with technology, we craft digital experiences that not
              only stand out but align with industry standards. Elevate your
              brand in the virtual realm with our tailored web solutions. Ready
              to redefine your online presence with Bihar's premier web
              developers?
            </p>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center text-center md:text-left">
          <div className="relative py-10 px-6 md:py-20 md:px-14">
            <motion.div
              className="w-[300px] md:w-[400px] h-[300px] md:h-[450px] rounded-t-full border-4 border-white overflow-hidden z--10 "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/08/shutterstock_722984446.jpg"
                alt="Main Visual"
                className="h-full w-full object-cover rounded-t-full"
              />
            </motion.div>

            <motion.div
              className="w-32 h-32 mt-[-115%] ml-[55%] absolute md:mt-[-35%] md:ml-[-30%]"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1 }}
            >
              <img src="images/sound.png" alt="Sound" className="h-full w-full" />
            </motion.div>

            <motion.div
              className="absolute hidden md:block ml-[-150px] mt-[-40px] w-[150px] md:w-[200px] h-[120px] md:h-[180px] rounded-br-2xl rounded-tl-2xl overflow-hidden border-4 border-white"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://www.propel-together.com/wp-content/uploads/2022/06/shutterstock_760978843.jpg"
                alt="Secondary Visual"
                className="h-full w-full object-cover rounded-br-2xl rounded-tl-2xl"
              />
            </motion.div>

            
            <div className="absolute hidden md:block mt-10 ml-10 md:mt-10 md:ml-40 w-40 md:w-52 h-24 md:h-32 bg-green-200"></div>
            <div className="absolute hidden md:block mt-10 ml-40 md:mt-[-60px] md:ml-72 w-40 md:w-60 h-24 md:h-32 overflow-hidden">
              <img
                src="https://www.pikpng.com/pngl/b/92-926693_open-triangle-purple-clipart.png"
                alt="Decorative"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 w-16 h-16 bg-green-600 flex items-center justify-center text-white text-5xl rounded-full">
        <FaWhatsapp />
      </div>
      <Services />
      <WhyUS />
      {/* <Goal /> */}
     
      <Vedic/>
       <Contact/>
      <Footer/>
      
    </>
  );
};

export default Home;
