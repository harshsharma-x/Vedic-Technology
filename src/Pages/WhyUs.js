import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faChartLine, faLaptopCode, faUserShield, faHandshake, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Components/Footer'
import WhyBg from '../Designs/LandingBG.jpg'
const WhyUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800" >
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 "style={{ backgroundImage: `url(${WhyBg})` }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Why Choose Vedic Technologies?</h1>
          <p className="text-lg mb-8">We deliver exceptional tech solutions to drive your business forward.</p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Unique Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <FontAwesomeIcon icon={faCogs} size="3x" className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>
              <p>We leverage the latest tools and technologies to deliver top-notch solutions.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <FontAwesomeIcon icon={faChartLine} size="3x" className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p>Our success stories speak for themselves with numerous satisfied clients.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <FontAwesomeIcon icon={faLaptopCode} size="3x" className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Developers</h3>
              <p>Our team consists of highly skilled and experienced professionals.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <FontAwesomeIcon icon={faUserShield} size="3x" className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p>We prioritize security to protect your data and ensure compliance.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <FontAwesomeIcon icon={faHandshake} size="3x" className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Client Collaboration</h3>
              <p>We work closely with clients to understand their needs and exceed expectations.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <FontAwesomeIcon icon={faThumbsUp} size="3x" className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p>Our rigorous testing ensures the highest quality of deliverables.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Partner with Us</h2>
          <p className="text-lg mb-8">Ready to elevate your business with our innovative tech solutions? Let's discuss your project today!</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 bg-blue-600 text-white rounded shadow"
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      {/* Footer */}
   
    </div>
  );
};
<Footer/>
export default WhyUs;



// import React from 'react';
// import { motion } from 'framer-motion';

// const WhyUS = () => {
//   return (

//     <div className="bg-gradient-to-r flex from-blue-100 via-slate-50 z--10 to-pink-200 pt-[55px] pr-[0px] pb-[60px] pl-[0px]">
//       <div className="w-[100%] px-[12px] mx-auto">
//         <div className="flex items-center justify-center flex-wrap mt-1 mx-4 lg:mx-15 p-4 lg:px-20">
//           <div className="flex flex-col lg:flex-row mt-16">
//             <motion.div
//               className="w-full lg:w-[666px] mb-0"
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="flex flex-wrap items-center">
//                 <div className="w-14 h-1 bg-red-500 rounded-full ml-3 mr-2"></div>
//                 <h5 className='text-[20px] mb-[6px] ml-3 text-red-500'>Why Choose Vedic Technologies?</h5>
//               </div>
//               <h1 className='text-blue-950 font-bold text-[40px] lg:text-[50px] text-start ml-3'>What Sets Us Apart</h1>
//               <p className='text-blue-950 font-normal mt-5 mb-10 text-start ml-3 text-[16px] lg:text-[20px]'>
//                 At Vedic Technologie, our professional website design services are crafted
//                 to elevate your business to new heights. We specialize in
//                 designs that not only maximize conversions but also
//                 authentically represent your brand, ensuring a substantial
//                 return on investment.
//               </p>
//               <div className="flex flex-wrap gap-5 items-center justify-center">
//                 <motion.div
//                   className="flex flex-col md:flex-row items-center gap-5"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <figure>
//                     <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/icons/project-management.png" loading='lazy' alt="Innovative Designs" title="Innovative Designs" />
//                   </figure>
//                   <div className="mt-3 md:mt-0">
//                     <span className='text-[20px] font-semibold text-blue-950'>Innovative Designs</span>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   className="flex flex-col md:flex-row items-center lg:ml-10 gap-5"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <figure className="mb-0 icon">
//                     <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/icons/transformation.png" loading='lazy' alt="Cutting-Edge Tech Stack" title="Cutting-Edge Tech Stack" />
//                   </figure>
//                   <div className="mt-3 md:mt-0">
//                     <span className="text-[20px] font-semibold text-blue-950">Cutting-Edge Tech Stack</span>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   className="flex flex-col md:flex-row items-center gap-5 mt-3"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <figure className="mb-0 icon">
//                     <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/icons/hand-shake.png" loading='lazy' alt="Collaborative Approach" title="Collaborative Approach" />
//                   </figure>
//                   <div className="mt-3 md:mt-0">
//                     <span className="text-[20px] font-semibold text-blue-950">Collaborative Approach</span>
//                   </div>
//                 </motion.div>
//                 <motion.div
//                   className="flex flex-col md:flex-row items-center gap-5 mt-3"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <figure className="mb-0 icon">
//                     <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/icons/good-feedback.png" loading='lazy' alt="Performance Prowess" title="Performance Prowess" />
//                   </figure>
//                   <div className="mt-3 md:mt-0 ">
//                     <span className="text-[20px] font-semibold text-blue-950">Performance Prowess</span>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//             <motion.div
//               className="w-full lg:w-[469.44px] h-[466px] mt-10 lg:mt-0 justify-center"
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="border-white border-solid border-[5px] rounded-t-[265px] rounded-b-[50px] overflow-hidden">
//                 <figure className="h-[450px] mb-0">
//                   <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/funfacts.webp" alt="Acceron" className='w-full h-[466px] object-cover transition-all duration-300 ease-in-out' />
//                 </figure>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhyUS;
