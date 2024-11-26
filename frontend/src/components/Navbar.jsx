import React from 'react';
import logo from '../assets/ipx_logo-1.png';
import menu_icon from '../assets/ipx_logo-1.png';


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="bg-gray-800 text-white text-sm">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-4">
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

          <div>
            <span className="mr-4">📞 +9140401510</span>
            <span>📧 ipxtechnology@gmail.com</span>
          </div>
        </div>
      </div>

      <nav className="bg-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex-shrink-0">
          <Link to={'/'}> <img
              src={logo}
              alt="IPX Logo"
              className="w-28 md:w-36 lg:w-40"
            />
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

           <Link to={"/contact"}> <button className="bg-blue-500 text-white px-3 py-1 text-sm md:px-4 md:py-2 md:text-base rounded-lg hover:bg-blue-600 transition">
            Get A Quote
          </button>
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
