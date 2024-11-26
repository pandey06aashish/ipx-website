import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactNavbar = () => {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex items-center justify-between px-4">


        <div className="hidden md:flex items-center gap-4 ">
          <span className="mr-2">📧</span>
          <a href="mailto:info@example.com" className="hover:underline">
            ipxtechnology@gmail.com
          </a>
          <span className="ml-2">📞</span>
          <a href="tel:+1234567890" className="hover:underline">
            +9140401510
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactNavbar;
