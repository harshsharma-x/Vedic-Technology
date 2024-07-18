import React from 'react';
import { motion } from 'framer-motion';

const PricingPage = () => {
  return (
    <div className='bg-gradient-to-r from-green-100 to-pink-200 min-h-screen flex items-center justify-center'>
      <div className="min-h-screen w-[80%] mt-20 p-6">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pricing Plans
        </motion.h1>
        <motion.p 
          className="text-center mb-12 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Choose a plan that fits your business needs. Whether you're a startup or an established business, we have a plan for you.
        </motion.p>
        
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {/* Basic Plan */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform duration-500 hover:bg-gradient-to-r from-blue-600 to-blue-200 hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
            <p className="text-5xl text-center font-semibold mb-4">₹ 30000</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
            <p className="mb-4">Duration: 2-4 weeks</p>
            <ul className="mb-4 list-disc list-inside">
              <li>Custom website design (up to 5 pages)</li>
              <li>Mobile-friendly responsive design</li>
              <li>Basic SEO optimization</li>
              <li>Contact form integration</li>
              <li>Social media integration</li>
              <li>Basic support (email)</li>
            </ul>
          </motion.div>

          {/* Professional Plan */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform duration-500 hover:bg-gradient-to-r from-blue-600 to-blue-200 hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Professional Plan</h2>
            <p className="text-5xl font-semibold mb-4 text-center">₹60000</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
            <p className="mb-4">Duration: 4-6 weeks</p>
            <ul className="mb-4 list-disc list-inside">
              <li>Custom website design (up to 10 pages)</li>
              <li>Mobile-friendly responsive design</li>
              <li>Advanced SEO optimization</li>
              <li>E-commerce functionality</li>
              <li>Blog setup</li>
              <li>Analytics setup and integration</li>
              <li>Social media integration</li>
              <li>Standard support (email and phone)</li>
            </ul>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform duration-500 hover:bg-gradient-to-r from-blue-600 to-blue-200 hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Enterprise Plan</h2>
            <p className="text-4xl text-center font-semibold mb-4">Custom Pricing</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
            <p className="mb-4">Duration: 6+ weeks</p>
            <ul className="mb-4 list-disc list-inside">
              <li>Custom website and app design (unlimited pages)</li>
              <li>Mobile-friendly responsive design</li>
              <li>Advanced SEO optimization</li>
              <li>Custom web applications</li>
              <li>E-commerce functionality</li>
              <li>Blog setup</li>
              <li>Advanced analytics setup and integration</li>
              <li>Social media integration</li>
              <li>API integrations</li>
              <li>Premium support (dedicated account manager)</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Add-Ons</h2>
          <ul className="mb-4 list-disc list-inside">
            <li>Additional Pages: ₹7,500 per page</li>
            <li>Monthly SEO Services: ₹37,500/month</li>
            <li>Content Creation: ₹15,000 per 1000 words</li>
            <li>Graphic Design Services: ₹3,750/hour</li>
            <li>Ongoing Support and Maintenance: ₹7,500/month</li>
          </ul>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <p className="mb-4">Expert Team: Our team of experienced developers and designers are dedicated to bringing your vision to life.</p>
          <p className="mb-4">Quality Assurance: We follow industry best practices to ensure high-quality deliverables.</p>
          <p className="mb-4">Customer Support: We offer reliable and responsive support to address your needs promptly.</p>
          <p className="mb-4">Affordable Pricing: Competitive pricing without compromising on quality.</p>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Contact Us</button>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
