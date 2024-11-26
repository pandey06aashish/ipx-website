import React, { useState } from 'react';
import log1 from '../assets/comp_logo1.png';
import log2 from '../assets/comp_logo2.png';
import log3 from '../assets/comp_logo3.png';
import log4 from '../assets/comp_logo4.png';
import web1 from '../assets/web1.png';
import web2 from '../assets/web2.jpg';

const Protfolio = () => {
  const [activeSection, setActiveSection] = useState('products');

  return (
    <div>
      {/* Toggle Button */}
      <div className="flex justify-center items-center mt-6">
        <div className="w-3/4 flex border-2 border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => setActiveSection('products')}
            className={`flex-1 py-2 text-center transition-colors duration-200 ${
              activeSection === 'products'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500'
            }`}
          >
            Our Products
          </button>
          <button
            onClick={() => setActiveSection('clients')}
            className={`flex-1 py-2 text-center transition-colors duration-200 ${
              activeSection === 'clients'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500'
            }`}
          >
            Our Clients
          </button>
        </div>
      </div>

      {/* Sections */}
      <div className="mt-6">
        {activeSection === 'products' && <ProductSection />}
        {activeSection === 'clients' && <ClientSection />}
      </div>
    </div>
  );
};

// Product Section Component
// Product Section Component
const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'E-Commerce Website',
      type: 'Website',
      image: web1,
    },
    {
      id: 5,
      name: 'E-Commerce Website',
      type: 'Website',
      image: web1,
    },
    {
      id: 6,
      name: 'E-Commerce Website',
      type: 'Website',
      image: web1,
    },
    {
      id: 2,
      name: 'Mobile App',
      type: 'Application',
      image: web2,
    },
    {
      id: 3,
      name: 'CRM Software',
      type: 'Software',
      image: web2,
    },
    {
      id: 4,
      name: 'Marketing Service',
      type: 'Other Services',
      image: web1,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg flex flex-col overflow-hidden"
          >
            {/* Image Section */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            {/* Details Section */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Client Section Component
const ClientSection = () => {
  const clients = [
    { id: 1, name: 'Company A', logo: log1 },
    { id: 2, name: 'Company B', logo: log2 },
    { id: 3, name: 'Company C', logo: log3 },
    { id: 4, name: 'Company D', logo: log4 },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-6">Our Clients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-32 w-32 object-contain mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">{client.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Protfolio;
