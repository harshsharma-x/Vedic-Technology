import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div className="min-h-screen flex flex-col  bg-gray-100">
     
      <motion.figure
        className="flex ml-0 md:ml-[50px]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >

      </motion.figure>

      <div className=" flex ml-20  ">

      <div className='border-black'>
        <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/work-globalimage.webp" alt="" />
      </div>
         
         <div className='ml-50'>
         <div className='text-center'>
       <motion.p
          className="text-2xl text-red-600 text-bold "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>How It Works</div>
          <div className='mb-12'>___</div>
        </motion.p>
        <motion.h1
          className="text-4xl font-bold mb-4 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Our Goal-Oriented
        </motion.h1>
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Approach
        </motion.h1>
       </div>
         </div>
       
      </div>

      <div className="flex flex-wrap mt-10 justify-center space-x-0 md:space-x-8">
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <div className="rounded-full bg-green-100 p-4 mb-4">
            <span className="text-2xl font-semibold">01</span>
            <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/work-icon1.png" alt="Icon 1" className="mb-4" />
          </div>
          <h2 className="text-xl font-semibold">Understanding Your Vision</h2>
          <p className="text-center max-w-xs">We begin by comprehending your goals and aspirations</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <div className="rounded-full bg-orange-100 p-4 mb-4">
            <span className="text-2xl font-semibold">02</span>
            <img src="/path/to/icon2.png" alt="Icon 2" className="mb-4" />
          </div>
          <h2 className="text-xl font-semibold">Tailored Solutions</h2>
          <p className="text-center max-w-xs">Crafting personalized strategies to align with your unique requirements</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <div className="rounded-full bg-purple-100 p-4 mb-4">
            <span className="text-2xl font-semibold">03</span>
            <img src="/path/to/icon3.png" alt="Icon 3" className="mb-4" />
          </div>
          <h2 className="text-xl font-semibold">Transparent Communication</h2>
          <p className="text-center max-w-xs">Open and clear communication throughout the development process</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1.0 }}
        >
          <div className="rounded-full bg-indigo-100 p-4 mb-4">
            <span className="text-2xl font-semibold">04</span>
            <img src="/path/to/icon4.png" alt="Icon 4" className="mb-4" />
          </div>
          <h2 className="text-xl font-semibold">Agile Development</h2>
          <p className="text-center max-w-xs">Embracing flexibility to adapt to evolving needs and market dynamics</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
