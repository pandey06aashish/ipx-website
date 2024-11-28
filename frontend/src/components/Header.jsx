import React from 'react';
import header_img from '../assets/team.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-y-10 px-4 mt-10 lg:mx-10 lg:mb-10 sm:mt-20">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Delivering innovative <br className="hidden md:block" />
          <span className="text-blue-500">Software</span> Solutions tailored <br className="hidden md:block" /> to your
          business needs.
        </h1>

        <p className="mt-4 text-lg text-neutral-600">
          We are a leading provider of cutting-edge software solutions, dedicated to helping businesses optimize their
          processes and achieve growth through innovative technology. Our team is committed to delivering customized
          solutions that meet the unique needs of every client.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <Link to={"/protfolio"}> <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 sm:w-auto w-full">
            Our Portfolio
          </button>
          </Link>
          <Link to="/packages">
            <button className="px-6 py-2 bg-gray-500 text-white font-medium rounded-lg shadow-lg hover:bg-gray-600 sm:w-auto w-full">
              Our Packages
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img src={header_img} alt="Team Collaboration" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Header;
