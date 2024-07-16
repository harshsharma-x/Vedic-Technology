import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Logo from '../Designs/3 copy.png'



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <div className='fixed w-full'>
          <div className="flex justify-center  bg-pink-100  md:px-8 ">
            <div className="h-16 w-[80%] border-2 flex items-center justify-between px-4">
                <div className="w-28">
                    <Link to="/" className="cursor-pointer ">
                        <img className='text-black' src={Logo} alt="" />
                       
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-black focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <i className="fas fa-times fa-2x"></i>
                        ) : (
                            <i className="fas fa-bars fa-2x"></i>
                        )}
                    </button>
                </div>
                <div className={`flex-col md:flex md:flex-row md:gap-20 ${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 h-70 w-full md:w-auto bg-pink-100 md:bg-transparent z-10 `}>
                    <ul className="flex flex-col md:flex-row md:gap-5 mt-2 md:mt-0 font-semibold text-lg items-center">
                        <div className="relative items-center">
                            <Link to="/Services" className="cursor-pointer">Services</Link>
                          
                        </div>
                        
                        <div className="relative">
                            <div className="cursor-pointer">Works</div>
                           
                        </div>
                        <div className="training">
                        <Link to="/training" className="cursor-pointer hover:underline">Training</Link>
                           
                        </div>
                        <div className="relative">
                            <Link to="/WhyUs" className="cursor-pointer hover:underline">Why Us</Link>
                           
                        </div>
                        <div className="relative">
                            <Link to="/Pricing" className="cursor-pointer hover:underline">Pricing</Link>

                        </div>
                        <div className="relative">
                            <div className="cursor-pointer">About Us</div>
                          
                        </div>
                    </ul>
                    <div className="flex justify-center mt-2 md:mt-0 md:ml-4">
                        <Link to='/contact'> <div
                            className="contact-button flex h-10 w-28 text-white bg-black justify-center items-center text-center hover:text-black z-10 rounded-lg cursor-pointer">
                            Contact Us
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Navbar;
