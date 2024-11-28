import React from "react";
import Ecommerce from '../assets/e-commerce.jpg';
import application from '../assets/application.jpg';
import marketing from '../assets/marketing.webp';

import CRM from '../assets/CRM.jpg';

import { Link } from "react-router-dom";




const Products = () => {
  const products = [
    {
      id: 1,
      name: "E-Commerce Website",
      type: "Website",
      description: "Customizable and scalable online store solutions.",
      price: "₹12000",
      image: Ecommerce,
    },
    {
      id: 2,
      name: "Mobile Application",
      type: "Application",
      description: "Seamless and user-friendly mobile app development.",
      price: "₹25000",
      image: application,
    },
    {
      id: 3,
      name: "CRM Software",
      type: "Software",
      description: "Streamline your business with tailored CRM solutions.",
      price: "₹30000",
      image: CRM,
    },
    {
      id: 4,
      name: "Marketing Services",
      type: "Other Services",
      description: "Effective strategies to boost your online presence.",
      price: "₹8000",
      image: marketing,
    },
    {
      id: 5,
      name: "E-Commerce Website",
      type: "Website",
      description: "Customizable and scalable online store solutions.",
      price: "₹12000",
      image: Ecommerce,
    },
    {
      id: 6,
      name: "Mobile Application",
      type: "Application",
      description: "Seamless and user-friendly mobile app development.",
      price: "₹25000",
      image: application,
    },
    {
      id: 7,
      name: "CRM Software",
      type: "Software",
      description: "Streamline your business with tailored CRM solutions.",
      price: "₹30000",
      image: CRM,
    },
    {
      id: 8,
      name: "Marketing Services",
      type: "Other Services",
      description: "Effective strategies to boost your online presence.",
      price: "₹8000",
      image: marketing,
    },
  ];

  const mostBuyProducts = [
    {
      id: 1,
      name: "CRM Software",
      type: "Software",
      description: "Streamline your business with tailored CRM solutions.",
      price: "₹30000",
      image: CRM,
    },
    {
      id: 2,
      name: "Mobile Application",
      type: "Application",
      description: "Seamless and user-friendly mobile app development.",
      price: "₹25000",
      image: application,
    },
    {
      id: 3,
      name: "E-Commerce Website",
      type: "Website",
      description: "Customizable and scalable online store solutions.",
      price: "₹12000",
      image: Ecommerce,
    },
    {
      id: 4,
      name: "Marketing Services",
      type: "Other Services",
      description: "Effective strategies to boost your online presence.",
      price: "₹8000",
      image: marketing,
    },
  ];

  return (
<section className="bg-gray-50 py-16 px-4">
  <div className="container mx-auto">
    {/* Section Heading */}
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      Our Products
    </h2>

    {/* Product Grid */}
    <Link to={"/contact"}>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md hover:bg-blue-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{product.type}</p>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Link>

    {/* Most Buy Section */}
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Most Buy Products
      </h2>
      <Link to={"/contact"}>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mostBuyProducts.map((product) => (
            <div
              key={product.id}
              className="shadow-md rounded-lg overflow-hidden hover:bg-blue-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{product.type}</p>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  </div>
</section>

  );
};

export default Products;
