import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../Designs/3 copy.png';
import logo1 from '../Designs/Logo1.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: "easeInOut",
            },
        },
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="fixed w-full z-50">
            <div className={`flex justify-center ${isMenuOpen ? 'bg-black text-white' : 'md:bg-pink-100'} md:px-8`}>
                <div className="h-16 w-[80%] flex items-center justify-between px-4">
                    <div className="w-28 md:mr-5">
                        <Link to="/" className="cursor-pointer">
                            <img src={isMenuOpen ? logo1 : Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-black focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <i className="fas fa-times fa-2x text-white"></i>
                            ) : (
                                <i className="fas fa-bars fa-2x"></i>
                            )}
                        </button>
                    </div>
                    <div className={`md:flex md:gap-20 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-pink-100 md:bg-transparent z-10`}>
                        <ul className="flex flex-col md:flex-row md:gap-5 mt-2 md:mt-0 font-semibold text-lg items-center">
                            <li className="relative">
                                <Link to="/Services" className="cursor-pointer hover:underline" onClick={toggleMenu}>Services</Link>
                            </li>
                            <li className="relative">
                                <Link to="/Works" className="cursor-pointer hover:underline" onClick={toggleMenu}>Works</Link>
                            </li>
                            <li className="relative">
                                <Link to="/WhyUs" className="cursor-pointer hover:underline" onClick={toggleMenu}>Why Us</Link>
                            </li>
                            <li className="relative">
                                <Link to="/training" className="cursor-pointer hover:underline" onClick={toggleMenu}>Training</Link>
                            </li>
                            <li className="relative">
                                <Link to="/cplusplus" className="cursor-pointer hover:underline" onClick={toggleMenu}>C++</Link>
                            </li>
                            <li className="relative">
                                <Link to="/Pricing" className="cursor-pointer hover:underline" onClick={toggleMenu}>Pricing</Link>
                            </li>
                            <li className="relative">
                                <Link to="/webdev" className="cursor-pointer hover:underline" onClick={toggleMenu}>About Us</Link>
                            </li>
                        </ul>
                        <div className="flex justify-center mt-2 md:mt-0 md:ml-4">
                            <Link to="/contact">
                                <div className="contact-button flex h-10 w-28 text-white bg-black justify-center items-center text-center hover:text-black rounded-lg cursor-pointer">
                                    Contact Us
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuVariants}
                
            >
                {isMenuOpen ? (
                    <div className="bg-black text-white md:hidden h-screen fixed top-0 left-0 w-full z-40">
                        <ul className="flex flex-col gap-8  ml-10 text-3xl font-semibold">
                            <li>
                                <Link to="/Services" className="cursor-pointer hover:underline" onClick={toggleMenu}>Services</Link>
                            </li>
                            <li>
                                <Link to="/Works" className="cursor-pointer hover:underline" onClick={toggleMenu}>Works</Link>
                            </li>
                            <li>
                                <Link to="/WhyUs" className="cursor-pointer hover:underline" onClick={toggleMenu}>Why Us</Link>
                            </li>
                            <li>
                                <Link to="/training" className="cursor-pointer hover:underline" onClick={toggleMenu}>Training</Link>
                            </li>
                            <li>
                                <Link to="/cplusplus" className="cursor-pointer hover:underline" onClick={toggleMenu}>C++</Link>
                            </li>
                            <li>
                                <Link to="/Pricing" className="cursor-pointer hover:underline" onClick={toggleMenu}>Pricing</Link>
                            </li>
                            <li>
                                <Link to="/webdev" className="cursor-pointer hover:underline" onClick={toggleMenu}>About Us</Link>
                            </li>
                        </ul>
                        <div className="flex mt-9 ml-10">
                            <Link to="/contact">
                                <div className="contact-button flex h-10 w-28 text-black bg-white justify-center items-center text-center hover:bg-white hover:text-black rounded-lg cursor-pointer">
                                    Contact Us
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : null}
            </motion.div>
        </div>
    );
};

export default Navbar;

