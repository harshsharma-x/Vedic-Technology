// src/MobileAppDevelopment.js

import React from 'react';
import { motion } from 'framer-motion';

const MobileAppDevelopment = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Do We Work on Mobile App Development</h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          At our company, we follow a structured and efficient process to ensure the highest quality in mobile app development. Our team of experienced developers starts with a thorough understanding of your requirements and goals. We then move on to wireframing and prototyping, ensuring that the design and functionality align with your vision.
        </p>
        <motion.img
          src="https://via.placeholder.com/600x400"
          alt="Development Process"
          className="mt-5 rounded-lg shadow-lg w-full sm:w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prioritizing Our Clients</h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          Our clients are our top priority. We maintain constant communication throughout the development process to ensure that we are meeting your expectations. Your feedback is invaluable to us, and we make sure to incorporate it at every stage. We believe that a collaborative approach leads to the best results.
        </p>
        <motion.img
          src="https://via.placeholder.com/600x400"
          alt="Client Priority"
          className="mt-5 rounded-lg shadow-lg w-full sm:w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Commitment to Quality</h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          Quality is at the heart of everything we do. We use the latest technologies and follow industry best practices to deliver robust and scalable mobile applications. Our rigorous testing and quality assurance processes ensure that your app is bug-free and performs seamlessly.
        </p>
        <motion.img
          src="https://via.placeholder.com/600x400"
          alt="Quality Commitment"
          className="mt-5 rounded-lg shadow-lg w-full sm:w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Post-Launch Support</h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          Our relationship with you doesn’t end with the launch of your app. We provide ongoing support and maintenance to ensure that your app stays up-to-date and continues to meet your evolving needs. We are always here to help you with any issues or improvements.
        </p>
        <motion.img
          src="https://via.placeholder.com/600x400"
          alt="Post-Launch Support"
          className="mt-5 rounded-lg shadow-lg w-full sm:w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default MobileAppDevelopment;
