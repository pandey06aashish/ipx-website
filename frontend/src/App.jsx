import React, { useState, useEffect } from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Protfolio from './pages/Protfolio';
import Products from './pages/Products';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [showBlinkEffect, setShowBlinkEffect] = useState(true);

  useEffect(() => {
    // Remove the blink effect after 5 seconds
    const timer = setTimeout(() => {
      setShowBlinkEffect(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <div>
      {showBlinkEffect ? (
        // Blink effect component
        <div className="flex items-center justify-center h-screen bg-black">
          <h1 className="text-4xl font-bold text-white animate-blink">
            Welcome to My Website
          </h1>
        </div>
      ) : (
        // Main website layout
        <>
          <Navbar />
          <div className="pt-[130px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/protfolio" element={<Protfolio />} />
              <Route path="/products" element={<Products />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
