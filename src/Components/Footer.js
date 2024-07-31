import React from 'react'
import Logo from '../Designs/WhiteLogo.png';

export const Footer = () => {
  return (
    <div>
      <div className="w-full font-roboto text-white min-h-[400px] bg-black">
        <div className="flex items-center flex-col md:flex-row justify-evenly p-4 md:p-10">
          <div className="text-white mb-8 md:mb-0">
            <div className="text-2xl flex justify-center items-center h-14 w-40 md:text-3xl font-bold">
              <img src={Logo} alt="Logo" />
            </div>
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
                <br />
                <div className="text-sm">(Mon-Fri) (12PM-5PM)</div>
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
    </div>
  )
}

export default Footer
