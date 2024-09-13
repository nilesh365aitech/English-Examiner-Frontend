import React from 'react';
import Component from './components/main';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/pricing' element={<Pricing/>} />
      </Routes>
    </Router>
  );
};

export default App;
