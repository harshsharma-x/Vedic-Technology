import React from 'react';
import { motion } from 'framer-motion';

const WhyUS = () => {
  return (
    <div className="bg-gradient-to-r flex from-blue-100 via-slate-50 to-pink-200 pt-[55px] pr-[0px] pb-[60px] pl-[0px] relative">
      <div className="w-[100%] px-[12px] mx-auto">
        <div className="flex items-center justify-center flex-wrap mt-1 mx-4 lg:mx-15 p-4 lg:px-20">
          <div className="flex flex-col lg:flex-row mt-16">
            <motion.div
              className="w-full lg:w-[666px] mb-0"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center">
                <div className="w-14 h-1 bg-red-500 rounded-full ml-3 mr-2"></div>
                <h5 className='text-[20px] mb-[6px] ml-3 text-red-500'>Why Choose Vedic Technologies?</h5>
              </div>
              <h1 className='text-blue-950 font-bold text-[40px] lg:text-[50px] text-start ml-3'>What Sets Us Apart</h1>
              <p className='text-blue-950 font-normal mt-5 mb-10 text-start ml-3 text-[16px] lg:text-[20px]'>
                At Vedic Technologie, our professional website design services are crafted
                to elevate your business to new heights. We specialize in
                designs that not only maximize conversions but also
                authentically represent your brand, ensuring a substantial
                return on investment.
              </p>
              <div className="flex flex-wrap gap-5 items-center justify-center">
                <motion.div
                  className="flex flex-col md:flex-row items-center gap-5"
                  whileHover={{ scale: 1.05 }}
                >
                  <figure>
                    <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/icons/project-management.png" loading='lazy' alt="Innovative Designs" title="Innovative Designs" />
                  </figure>
                  <div className="mt-3 md:mt-0">
                    <span className='text-[20px] font-semibold text-blue-950'>Innovative Designs</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col md:flex-row items-center lg:ml-10 gap-5"
                  whileHover={{ scale: 1.05 }}
                >
                  <figure className="mb-0 icon">
                    <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/icons/transformation.png" loading='lazy' alt="Cutting-Edge Tech Stack" title="Cutting-Edge Tech Stack" />
                  </figure>
                  <div className="mt-3 md:mt-0">
                    <span className="text-[20px] font-semibold text-blue-950">Cutting-Edge Tech Stack</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col md:flex-row items-center gap-5 mt-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <figure className="mb-0 icon">
                    <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/icons/hand-shake.png" loading='lazy' alt="Collaborative Approach" title="Collaborative Approach" />
                  </figure>
                  <div className="mt-3 md:mt-0">
                    <span className="text-[20px] font-semibold text-blue-950">Collaborative Approach</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col md:flex-row items-center gap-5 mt-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <figure className="mb-0 icon">
                    <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/icons/good-feedback.png" loading='lazy' alt="Performance Prowess" title="Performance Prowess" />
                  </figure>
                  <div className="mt-3 md:mt-0 ">
                    <span className="text-[20px] font-semibold text-blue-950">Performance Prowess</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-[469.44px] h-[466px] mt-10 lg:mt-0 justify-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="border-white border-solid border-[5px] rounded-t-[265px] rounded-b-[50px] overflow-hidden">
                <figure className="h-[450px] mb-0">
                  <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/funfacts.webp" alt="Acceron" className='w-full h-[466px] object-cover transition-all duration-300 ease-in-out' />
                </figure>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUS;
