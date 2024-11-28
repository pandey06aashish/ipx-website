import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Protfolio from './pages/Protfolio';
import Products from './pages/Products';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Typewriter from 'typewriter-effect';

const App = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!showMainContent ? (
        <div className="flex items-center justify-center h-screen bg-blue-500">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center px-6 py-4 ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Welcome To IPX Technology')
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
        </div>
      ) : (
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
