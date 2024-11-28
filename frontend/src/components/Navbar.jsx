import React, { useState } from 'react';
import logo from '../assets/ipx_logo-1.png';
import menu_icon from '../assets/menu_icon.png';
import cross_icon from '../assets/cross_icon.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
     <div className="bg-gray-800 text-white text-sm">
  <div className="container mx-auto flex justify-between items-center py-2 px-4">
    {/* Social media icons for larger screens */}
    <div className="hidden sm:flex items-center space-x-4">
      <a href="#" className="hover:text-blue-500">
        <FaFacebookF />
      </a>
      <a href="#" className="hover:text-blue-400">
        <FaTwitter />
      </a>
      <a href="#" className="hover:text-pink-500">
        <FaInstagram />
      </a>
      <a href="#" className="hover:text-blue-700">
        <FaLinkedinIn />
      </a>
    </div>

    {/* Phone and email for larger screens */}
    <div className="hidden sm:flex">
      <span className="mr-4">📞 +9140401510</span>
      <span>📧 ipxtechnology@gmail.com</span>
    </div>
  </div>

  {/* For mobile devices: Centered social media icons with increased gap */}
  <div className="sm:hidden flex justify-center items-center py-2 px-4">
    <div className="flex space-x-10"> {/* Increased gap from space-x-4 to space-x-6 */}
      <a href="#" className="hover:text-blue-500">
        <FaFacebookF />
      </a>
      <a href="#" className="hover:text-blue-400">
        <FaTwitter />
      </a>
      <a href="#" className="hover:text-pink-500">
        <FaInstagram />
      </a>
      <a href="#" className="hover:text-blue-700">
        <FaLinkedinIn />
      </a>
    </div>
  </div>
</div>

      <nav className="bg-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="IPX Logo" className="w-28 md:w-36 lg:w-40" />
            </Link>
          </div>

          <ul className="hidden sm:flex sm:gap-2 md:gap-3 lg:gap-5 lg:text-lg font-bold">
            <NavLink
              to="/"
              className="flex flex-col items-center gap-1"
            >
              <p>Home</p>
              <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
            </NavLink>
            <NavLink
              to="/about"
              className="flex flex-col items-center gap-1"
            >
              <p>About</p>
              <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
            </NavLink>
            <NavLink
              to="/protfolio"
              className="flex flex-col items-center gap-1"
            >
              <p>Portfolio</p>
              <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
            </NavLink>
            <NavLink
              to="/products"
              className="flex flex-col items-center gap-1"
            >
              <p>Products</p>
              <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
            </NavLink>
            <NavLink
              to="/packages"
              className="flex flex-col items-center gap-1"
            >
              <p>Packages</p>
              <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
            </NavLink>
            <NavLink
              to="/contact"
              className="flex flex-col items-center gap-1"
            >
              <p>Contact</p>
              <hr className="w-2/4 bg-gray-700 border-none h-[1.5px] hidden" />
            </NavLink>
          </ul>

          <Link to="/contact">
            <button className="hidden sm:block bg-blue-500 text-white px-3 py-1 text-sm md:px-4 md:py-2 md:text-base rounded-lg hover:bg-blue-600 transition">
              Get A Quote
            </button>
          </Link>

          <img
            onClick={toggleMenu}
            src={menu_icon}
            className="w-6 h-6 cursor-pointer sm:hidden"
            alt="menu-icon"
          />
        </div>

        <div
          className={`fixed top-0 right-0 h-full transition-transform duration-500 z-50 ${visible ? 'translate-x-0' : 'translate-x-full'
            } bg-white text-gray-600`}
          style={{ width: '60%' }}
        >
          <div className="flex flex-col p-5 h-full">
            <div onClick={toggleMenu} className="flex items-center mb-4 cursor-pointer">
              <img className="h-4 rotate-180" src={cross_icon} alt="close menu" />
              <p className="ml-2">Close</p>
            </div>

            <NavLink onClick={toggleMenu} className='py-2 pl-6 border-b' to='/'>Home</NavLink>
            <NavLink onClick={toggleMenu} className='py-2 pl-6 border-b' to='/about'>About</NavLink>
            <NavLink onClick={toggleMenu} className='py-2 pl-6 border-b' to='/protfolio'>Protfolio</NavLink>
            <NavLink onClick={toggleMenu} className='py-2 pl-6 border-b' to='/products'>Products</NavLink>
            <NavLink onClick={toggleMenu} className='py-2 pl-6 border-b' to='/products'>Products</NavLink>
            <NavLink onClick={toggleMenu} className='py-2 pl-6 border-b' to='/packages'>Packages</NavLink>
            <NavLink onClick={toggleMenu} className='py-2 pl-6 border-b' to='/contact'>Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
