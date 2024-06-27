import React from 'react';
import { motion } from 'framer-motion';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 w-[80%] ">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
      <p className="text-center mb-12 text-gray-700">
        Choose a plan that fits your business needs. Whether you're a startup or an established business, we have a plan for you.
      </p>
      
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center">
        
        {/* Basic Plan */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
          <p className="text-xl font-semibold mb-4">₹74,999</p>
          <p className="mb-4">Duration: 2-4 weeks</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Custom website design (up to 5 pages)</li>
            <li>Mobile-friendly responsive design</li>
            <li>Basic SEO optimization</li>
            <li>Contact form integration</li>
            <li>Social media integration</li>
            <li>Basic support (email)</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
        </motion.div>

        {/* Professional Plan */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold mb-4">Professional Plan</h2>
          <p className="text-xl font-semibold mb-4">₹2,24,999</p>
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold mb-4">Enterprise Plan</h2>
          <p className="text-xl font-semibold mb-4">Custom pricing</p>
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
        </motion.div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Add-Ons</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Additional Pages: ₹7,500 per page</li>
          <li>Monthly SEO Services: ₹37,500/month</li>
          <li>Content Creation: ₹15,000 per 1000 words</li>
          <li>Graphic Design Services: ₹3,750/hour</li>
          <li>Ongoing Support and Maintenance: ₹7,500/month</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <p className="mb-4">Expert Team: Our team of experienced developers and designers are dedicated to bringing your vision to life.</p>
        <p className="mb-4">Quality Assurance: We follow industry best practices to ensure high-quality deliverables.</p>
        <p className="mb-4">Customer Support: We offer reliable and responsive support to address your needs promptly.</p>
        <p className="mb-4">Affordable Pricing: Competitive pricing without compromising on quality.</p>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Contact Us</button>
      </div>
    </div>
  );
};

export default PricingPage;
