import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Services from './Services'
import WhyUS from './WhyUs'
import Goal from './Goal'


const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r z--100 from-green-100 to-pink-200 min-h-screen flex flex-col md:flex-row gap-2">
        <div className="md:w-1/2 flex justify-center items-center text-center md:text-left">
          <motion.div
            className="ml-4 md:ml-[15%] py-10 px-6 md:py-20 md:px-14"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-red-500 font-bold flex items-center justify-center md:justify-start">
              <IoRemoveOutline className="text-4xl md:text-7xl mr-2" />
              Beast Web Design & Development Agency
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
              className="w-[300px] md:w-[400px] h-[300px] md:h-[450px] rounded-t-full border-4 border-white overflow-hidden"
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

            <motion.div
              className="mt-6 ml-[10%] md:ml-[18%] w-[240px]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <button className="bg-red-500 py-4 px-6 rounded-xl w-full flex items-center justify-center text-white font-semibold">
                Get a Quick Estimate
                <FaArrowRight className="ml-4" />
              </button>
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
      <Services/>
      <WhyUS/>
      {/* <Goal/> */}
    
      <div className="w-full font-roboto text-white min-h-[400px] bg-black">


      <div className="flex  items-center  flex-col md:flex-row justify-evenly p-4 md:p-10">
        <div className="text-white mb-8 md:mb-0">
          <div className="text-2xl md:text-3xl font-bold">Vedic <br />Technologies</div>
          <div className="mt-2 text-sm md:text-base">
            Transforming ideas into innovative IT solutions.
            <br />Your trusted partner in technology excellence.
            <br />Empowering businesses with cutting-edge services.
            <br />Vedic Technologies: Shaping the future today.
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <i className="fab fa-linkedin fa-2xl"></i>
            <i className="fab fa-instagram fa-2xl"></i>
            <i className="fab fa-facebook-f fa-2xl"></i>
            <i className="fab fa-youtube fa-2xl"></i>
          </div>
        </div>
        <div className="text-white mt-5 md:mt-0 flex flex-col space-y-4">
          <div className="flex items-start">
            <i className="fas fa-map-marker-alt"></i>
            <div className="ml-4">
              Vedic Technologies, Sahibganj Nathnagar
              <br />Near Dr. Ruby Hambram,
              <br />Bhagalpur 812006, Bihar, IN
            </div>
          </div>
          <div className="flex items-center">
            <i className="far fa-envelope"></i>
            <span className="ml-2">contact@vedictechnologies.com</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone"></i>
            <div className="ml-4">
              +91 123456789
              <br /><div className="text-sm">(Mon-Fri) (12PM-5PM)</div>
            </div>
          </div>
          <div className="contact-button gap-2 flex h-10 w-28 text-white bg-black justify-center items-center text-center hover:text-black z-10 rounded-lg cursor-pointer">
            <i className="far fa-envelope"></i>
            <div className="text-sm">SUPPORT</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 mt-6 text-center text-sm text-white p-4">
        © 2024 Vedic Technologies. All rights reserved.
        <br />Innovative IT solutions for a smarter tomorrow.
      </div>
    </div>
    </>
  );
};

export default Home;
