import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Goal from './Pages/Goal';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goal" element={<Goal />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
