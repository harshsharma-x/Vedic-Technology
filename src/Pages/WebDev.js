// src/AboutUs.js

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer'

const AboutUs = () => {
  return (
    <div className="text-slate-600">
      <div className='container mx-auto p-6 bg-gradient-to-r z--100 from-green-100 to-pink-200 min-h-screen  flex flex-col items-center justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">How We Work on Web Development</h1>
        <p className="text-lg">
          Our team follows a structured approach to web development, ensuring that every project is completed with the highest quality standards.
        </p>
        <p className="text-lg mt-4">
          We begin with understanding the client's requirements, followed by planning, designing, developing, and testing the web application.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4">Our Priority to Clients</h2>
        <p className="text-lg">
          Clients are our top priority. We ensure clear communication and transparency throughout the project lifecycle.
        </p>
        <p className="text-lg mt-4">
          Our goal is to deliver solutions that not only meet but exceed client expectations.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <img src="https://via.placeholder.com/300" alt="Development Process" className="w-full h-auto"/>
        <img src="https://via.placeholder.com/300" alt="Client Meeting" className="w-full h-auto"/>
        <img src="https://via.placeholder.com/300" alt="Project Delivery" className="w-full h-auto"/>
      </motion.div>
      
      </div>
      <Footer/>
    </div>

   
  );
}

export default AboutUs;
