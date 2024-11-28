import React from 'react';
import logo from '../assets/ipx_logo-1.png';

const Footer = () => {
    return (
        <div className="bg-gray-100">
            <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-10 px-5 sm:px-10 lg:px-20 py-10 text-sm">
                {/* Logo and Description */}
                <div>
                    <img src={logo} className="mb-5 w-32" alt="Company Logo" />
                    <p className="text-gray-600 leading-6">
                        We are a leading provider of cutting-edge software solutions, dedicated to helping businesses optimize 
                        their processes and achieve growth through innovative technology. Our team is committed to delivering 
                        customized solutions that meet the unique needs of every client.
                    </p>
                </div>

                {/* Company Section */}
                <div>
                    <p className="text-lg font-medium mb-5">Company</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Get in Touch Section */}
                <div>
                    <p className="text-lg font-medium mb-5">Get in Touch</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+1-914040-15-20</li>
                        <li>ipxtechnology@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* Divider and Footer Bottom */}
            <div>
                <hr className="w-full border-none h-[1px] bg-gray-700" />
                <p className="py-5 text-sm text-center text-gray-600">
                    © 2024 ipxtechnology.com - All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
