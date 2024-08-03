import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faProjectDiagram, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Components/Footer'

const HomePage = () => {
  const heroRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(heroRef.current, { opacity: 0, y: -50, duration: 1 });
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Kickstart Your Tech Career with Real Projects</h1>
          <p className="text-lg mb-8">Hands-on training for new students with real-world projects and minimal fees.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 bg-white text-blue-600 rounded shadow"
          >
            Join Now
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-blue-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About the Program</h2>
          <p className="text-lg mb-4">Our training program is designed to give students real-world experience by working on live projects. With expert guidance and minimal fees, we ensure you get the best start in your tech career.</p>
          <div className="flex justify-center space-x-8 mt-8">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faLaptopCode} size="3x" className="text-blue-600 mb-4" />
              <p>Hands-on Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faProjectDiagram} size="3x" className="text-blue-600 mb-4" />
              <p>Real Projects</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faGraduationCap} size="3x" className="text-blue-600 mb-4" />
              <p>Expert Guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Curriculum Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">Module 1</h3>
              <p>Introduction to Web Development</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">Module 2</h3>
              <p>Working with Databases</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">Module 3</h3>
              <p>Building Full-Stack Applications</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">Module 4</h3>
              <p>Real-World Projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <p>"Vedic Technologies gave me the real-world experience I needed to land my first job in tech!"</p>
              <p className="mt-4 font-bold">- Student Name</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <p>"The hands-on projects and expert guidance were invaluable in my learning journey."</p>
              <p className="mt-4 font-bold">- Student Name</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Pricing and Enrollment</h2>
          <p className="text-lg mb-8">Our training program is available for a minimal, which includes all modules and project work.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 bg-white text-blue-600 rounded shadow"
          >
            Enroll Now
          </motion.button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">What is the duration of the program?</h3>
              <p>The program lasts for 12 weeks, with weekly sessions and project work.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">Do I need prior experience?</h3>
              <p>No prior experience is required. Our program is designed for beginners.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">What kind of support will I receive?</h3>
              <p>You'll receive guidance from industry experts and have access to a community of fellow learners.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-4">Have more questions? Contact us at <a href="mailto:info@vedictechnologies.com" className="text-blue-600">info@vedictechnologies.com</a> or call us at (123) 456-7890.</p>
        </div>
      </section>

      {/* Footer */}
       <Footer/>
    </div>
  );
};

export default HomePage;
