
import React from 'react';

const Project = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <figure className=' flex ml-[50px] '>
       <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/work-globalimage.webp" alt="" />
    </figure>
      
      <div className="text-center mb-12">
      <p className="">How It Works</p>
        <h1 className="text-4xl font-bold mb-4">Our Goal-Oriented </h1>
        <h1 className='text-4xl font-bold'>Approach</h1>
        
      </div>
      <div className="flex justify-between space-x-8">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-green-100 p-4 mb-4">
            <span className="text-2xl font-semibold">01</span>
            <img src="https://acceron.in/lp/website-design-and-development-agency/assets/imgs/work-icon1.png" alt="Icon 1" className="mb-4" />


            
          </div>
          <h2 className="text-xl font-semibold">Understanding Your Vision</h2>
          <p className="text-center max-w-xs">We begin by comprehending your goals and aspirations</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-orange-100 p-4 mb-4">
            <span className="text-2xl font-semibold">02</span>
          </div>
          <img src="/path/to/icon2.png" alt="Icon 2" className="mb-4" />
          <h2 className="text-xl font-semibold">Tailored Solutions</h2>
          <p className="text-center max-w-xs">Crafting personalized strategies to align with your unique requirements</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-purple-100 p-4 mb-4">
            <span className="text-2xl font-semibold">03</span>
          </div>
          <img src="/path/to/icon3.png" alt="Icon 3" className="mb-4" />
          <h2 className="text-xl font-semibold">Transparent Communication</h2>
          <p className="text-center max-w-xs">Open and clear communication throughout the development process</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-indigo-100 p-4 mb-4">
            <span className="text-2xl font-semibold">04</span>
          </div>
          <img src="/path/to/icon4.png" alt="Icon 4" className="mb-4" />
          <h2 className="text-xl font-semibold">Agile Development</h2>
          <p className="text-center max-w-xs">Embracing flexibility to adapt to evolving needs and market dynamics</p>
        </div>
      </div>
    </div>

   

     
  );
};

export default Project;