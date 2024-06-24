import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Landing';
import Goal from './Pages/Goal';
import WhyUs from './Pages/WhyUs';
import Services from './Pages/Services';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/WhyUs" element={<WhyUs />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
