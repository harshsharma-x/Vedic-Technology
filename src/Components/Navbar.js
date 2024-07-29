import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Logo from '../Designs/3 copy.png'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

     console.log (isMenuOpen);

    return (
      <div className='fixed w-full z-100 '>
          <div className="flex justify-center  bg-pink-100  md:px-8">
            <div className="h-16 w-[80%] border-2 flex items-center justify-between px-4">
                <div className="w-28 md:mr-5">
                    <Link to="/" className="cursor-pointer ">
                        <img className='text-black' src={Logo} alt="" /> </Link>

                   
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
                <div className={`flex-row md:flex md:flex-row md:gap-20 ${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 h-70 w-full md:w-auto bg-pink-100 md:bg-transparent z-10 `}>
                    <ul className="flex flex-col md:flex-row md:gap-5 mt-2 md:mt-0 font-semibold text-lg items-center">
                        <div className="relative items-center">
                            <Link to="/Services" className="cursor-pointer hover:underline">Services</Link>
                          
                        </div>
                        
                        <div className="relative">

                            <Link to="/Works" className="cursor-pointer hover:underline">Works</Link>

                        </div>
                        <div className="relative">
                            <Link to="/WhyUs" className="cursor-pointer hover:underline">Why Us</Link>
                        

                            
                          
                        </div>
                        <div className="relative">
                        <Link to="/training" className="cursor-pointer hover:underline">Training</Link>
                           
                        </div>
                        <div className="relative">
                        <Link to="/cplusplus" className="cursor-pointer hover:underline">C++</Link>
                           
                        </div>
                       
                        <div className="relative">
                            <Link to="/Pricing" className="cursor-pointer hover:underline">Pricing</Link>

                        </div>
                        <div className="">
                            <Link to="/webdev" className="cursor-pointer hover:underline">About Us</Link>
                          
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
         {/*mobile view */}
         {isMenuOpen ? (<div className="bg-red-500 text-white z-110 md:hidden">
                        <ul className=" flex flex-col md:hidden md:gap-5 mt-2 md:mt-0 font-semibold text-lg ml-10 gap-8">
                        <div className="">
                            <Link to="/Services" className="cursor-pointer hover:underline "onClick={toggleMenu}>Services</Link>
                          
                        </div>
                        
                        <div className="">

                            <Link to="/Works" className="cursor-pointer hover:underline"onClick={toggleMenu}>Works</Link>

                        </div>
                        <div className="">
                            <Link to="/WhyUs" className="cursor-pointer hover:underline"onClick={toggleMenu}>Why Us</Link>
                        

                            
                          
                        </div>
                        <div className="">
                        <Link to="/training" className="cursor-pointer hover:underline"onClick={toggleMenu}>Training</Link>
                           
                        </div>
                        <div className="">
                        <Link to="/cplusplus" className="cursor-pointer hover:underline"onClick={toggleMenu}>C++</Link>
                           
                        </div>
                        
                      
                        <div className="">
                            <Link to="/Pricing" className="cursor-pointer hover:underline"onClick={toggleMenu}>Pricing</Link>

                        </div>
                        <div className="">
                            <Link to="/webdev" className="cursor-pointer hover:underline"onClick={toggleMenu}>About Us</Link>
                          
                        </div>
                    </ul>
                    <div className="flex  mt-2 md:mt-0 ml-5">
                        <Link to='/contact'> <div
                            className="contact-button flex h-10 w-28 text-black bg-white justify-center items-center text-center hover:bg-white hover:text-black z-10 rounded-lg cursor-pointer">
                            Contact Us
                        </div></Link>
                    </div></div>
                    ) : null}
      </div>
    );
}; 
<div className="">
    <div className=""></div>
</div>

export default Navbar;
// 