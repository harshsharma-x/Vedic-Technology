import React from 'react';
import Vedic from '../Designs/WeAreVedic.jpg';

const WeAreVedic = () => {
  return (
    <div className='bg-black text-white w-full h-screen flex flex-col lg:flex-row'>
      <div className='text-white font-sanspro lg:ml-48 p-6 flex-1'>
        <div>
          <h1 className='text-3xl lg:text-5xl mb-6'>We are Vedic</h1>
        </div>
        <div className='text-sm '>
          Vedic Technologies is an end-to-end mobile product agency, focusing on
          <br /> designing and engineering today’s mobile-first businesses and
          <br /> new ventures. Founded by digital leaders from companies like
          <br /> Major League Baseball and McCann Erickson, Utility is built by folks
          <br /> that have been on the other side of the table and in big spotlights.
          <br /> We treat every project as if it was our own, and our
          <br /> process ensures we build products that create measurable value
          <br /> on time and on budget.
        </div>
        <div className='mt-8'>
          Our veteran team of strategists, designers, and developers have
          <br /> deep experience across various fields,
          from Entertainment and
          <br /> Media, to Medical and Wellness, to Fintech and Fashion.
        </div>
      </div>
      <div className='w-full lg:w-1/2 p-0 flex items-center justify-center'>
        <img src={Vedic} alt="We Are Vedic" className='object-cover h-full w-full' />
      </div>
    </div>
  );
};

export default WeAreVedic;
