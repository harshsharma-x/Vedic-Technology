// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link, useState } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'TestWorld',
    description: 'Simplifying testing with intuitive interfaces and powerful analytics, ensuring seamless software quality assurance.',
    image: 'https://via.placeholder.com/150/0000FF/808080?text=John',
    url: '/Testworld'
  },
  {
    id: 2,
    title: 'Client Management Software',
    description: 'Streamline client relationships effortlessly  with our intuitive management system, offering robust tools for efficient communication',

    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Jane',
    url: '/ClientSystem'
  }
];

const Home = () => {

  // const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow']);
  return (
    <div>
      <section className="bg-gradient-to-r z--100 from-green-100 to-pink-200 min-h-screen text-white flex flex-col items-center justify-center p-8">
        <div className=" mb-12  ">

        </div>
        <div id="services" className="w-full">
          {/* <h2 className="text-3xl text-slate-600 font-bold text-center mb-8">Our Services</h2> */}
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className=" w-[500px] h-[600px] bg-gray-100 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >

                <Link to={service.url} className="">

                  <img src={service.imgSrc} alt={service.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                  <p className='text-gray-500'>{service.description}</p></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
