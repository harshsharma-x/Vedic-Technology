import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 md:mt-4">
      <div className="w-full max-w-4xl text-center py-4">
        <h1 className="text-4xl font-bold">Let's Talk</h1>
        <p className="text-xl text-gray-400 font-thin mt-2">
          We've worked with clients of all sizes, from enterprise
          <br />
          brands to funded startups. Let's talk about your
          <br />
          project and how we can help provide value.
        </p>

        <div className="w-full mt-4 flex flex-col lg:flex-row justify-center items-center rounded-lg">
          <div className="w-full lg:w-1/2 p-6">
            <input
              type="text"
              className="w-full py-4 px-6 mb-6 outline-none border-2 border-gray-400 rounded-md"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full py-4 px-6 mb-6 outline-none border-2 border-gray-400 rounded-md"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full py-4 px-6 outline-none border-2 border-gray-400 rounded-md"
              placeholder="Phone Number"
            />
          </div>

          <div className="w-full lg:w-1/2 p-6">
            <input
              type="text"
              className="w-full py-4 px-6 mb-6 outline-none border-2 border-gray-400 rounded-md"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="w-full py-4 px-6 mb-6 outline-none border-2 border-gray-400 rounded-md"
              placeholder="Company"
            />
            <select className="w-full py-4 px-6 outline-none border-2 border-gray-400 rounded-md text-xl font-semibold">
              <option value="">Budget</option>
              <option value="less-than-5000">Less than 50000</option>
              <option value="5000-10000">50000 - 100000</option>
              <option value="more-than-10000">More than 100000</option>
            </select>
          </div>
        </div>

        <div className="w-full flex justify-center mt-6">
          <textarea
            className="w-full lg:w-[95%] h-44 p-4 border-2 border-gray-400 rounded-md outline-none"
            placeholder="Tell us about your project. What problem can we help you solve?"
          />
        </div>

        <div className="w-full flex justify-center mt-4">
          <button className="bg-black text-white py-3 px-6 rounded-md">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
