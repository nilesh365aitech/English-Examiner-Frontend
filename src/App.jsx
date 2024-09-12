import React from 'react';
import Component from './components/main';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Contact from './components/Contact';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <Router>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <NavLink to={"/"} className="text-2xl font-bold text-blue-600">EnglishExaminer</NavLink>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#features" className="text-gray-600 hover:text-blue-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-blue-600">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/pricing' element={<Pricing/>} />
      </Routes>
    </Router>
  );
};

export default App;
