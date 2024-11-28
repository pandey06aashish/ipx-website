import React from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      title: "Basic Package",
      description: "Ideal for small businesses to get started with essential IT solutions.",
      price: "₹19999/month",
      features: ["Website Development", "Basic Hosting", "Email Support"],
      learnMore: "#",
    },
    {
      title: "Professional Package",
      description: "Perfect for growing businesses needing advanced IT services.",
      price: "₹49999/month",
      features: [
        "Website + Mobile App Development",
        "Premium Hosting",
        "24/7 Support",
        "SEO Optimization",
      ],
      learnMore: "#",
    },
    {
      title: "Enterprise Package",
      description: "Customized solutions for large enterprises with complex needs.",
      price: "₹80000/month",
      features: [
        "Custom Software Development",
        "Dedicated Hosting",
        "Priority Support",
        "Digital Marketing",
      ],
      learnMore: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Packages
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the perfect package tailored to your business needs. From
          startups to enterprises, we offer comprehensive solutions to help
          you succeed. Choose a package and elevate your business to new
          heights!
        </p>
      </div>

      {/* Packages Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              {pkg.title}
            </h2>
            <p className="text-gray-600 mb-4">{pkg.description}</p>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {pkg.price}
            </p>
            <ul className="mb-4 space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="text-gray-700 flex items-center">
                  <span className="w-4 h-4 text-blue-500 mr-3">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
             <Link to={"/contact"}><button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
                Get Started
              </button>
              </Link> 
              <a
                href={pkg.learnMore}
                className="text-blue-500 hover:underline text-sm"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Comparison Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Not Sure Which Package to Choose?
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Compare the features and benefits of each package to make an
          informed decision. Our team is here to help if you have any
          questions!
        </p>
       
       <Link to={'/contact'}> <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg mt-6">
          Compare Packages
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Packages;
