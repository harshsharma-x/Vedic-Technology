import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Landing';
import Goal from './Pages/Goal';
import WhyUs from './Pages/WhyUs';
import Services from './Pages/Services';
import WebDev from './Pages/WebDev';
import MobileApp from './Pages/MobApp';
import Contact from './Components/LetsTalk'
import Pricing from './Components/PricingPage'
import Training from './Pages/Training';
import CPlusPlus from './Pages/CPlusPlus';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/mobileapp" element={<MobileApp />} />
        <Route path="/WhyUs" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/cplusplus" element={<CPlusPlus />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
