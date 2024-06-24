import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex">
            <div className="h-16 w-full border-2 flex items-center bg-pink-100 justify-between px-4 md:px-8">
                <div className="w-28">
                    <Link to="/" className="cursor-pointer "><span className="flex flex-col items-center justify-center text-xl font-medium cursor-pointer">
                        Vedic <br /> <div className='text-sm'>
                        Technologies
                        </div>
                    </span></Link>
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
                            {/* <ul className="absolute bg-white text-black text-md p-2 mt-2 w-72 border-2 rounded-lg cursor-pointer">
                                <li className="flex gap-2 items-center cursor-pointer">
                                    <i className="fa-solid fa-code"></i>
                                    <span className="hover:underline">Web Development</span>
                                </li>
                                <li>
                                    <div className="mt-2">
                                        <div className="flex gap-2 items-center cursor-pointer">
                                            <i className="fa-solid fa-mobile-screen-button ml-1"></i>
                                            <span className="hover:underline">Mobile App Development</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-2 flex gap-2 items-center cursor-pointer">
                                    <i className="fa-solid fa-palette ml-1"></i>
                                    <span className="hover:underline">UI/UX Design</span>
                                </li>
                            </ul> */}
                        </div>
                        <div className="relative">
                            <div className="cursor-pointer">Works</div>
                            {/* <ul className="absolute hidden bg-white text-black p-2 mt-2">
                                <li>Work 1</li>
                                <li>Work 2</li>
                                <li>Work 3</li>
                            </ul> */}
                        </div>
                        <div className="relative">
                        <Link to="/WhyUs" className="cursor-pointer hover:underline">Why Us</Link>
                            {/* <ul className="absolute hidden bg-white text-black p-2 mt-2">
                                <li>Contact 1</li>
                                <li>Contact 2</li>
                                <li>Contact 3</li>
                            </ul> */}
                        </div>
                        <div className="relative">
                            <Link to="/Goal" className="cursor-pointer hover:underline">Goal</Link>
                            
                        </div>
                        <div className="relative">
                            <div className="cursor-pointer">About Us</div>
                            {/* <ul className="absolute hidden bg-white text-black p-2 mt-2">
                                <li>About Us 1</li>
                                <li>About Us 2</li>
                                <li>About Us 3</li>
                            </ul> */}
                        </div>
                    </ul>
                    <div className="flex justify-center mt-2 md:mt-0 md:ml-4">
                        <div className="contact-button flex h-10 w-28 text-white bg-black justify-center items-center text-center hover:text-black z-10 rounded-lg cursor-pointer">
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
