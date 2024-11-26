import React from 'react';

const Packages = () => {
  const packages = [
    {
      title: "Basic Package",
      description: "Ideal for small businesses to get started with essential IT solutions.",
      price: "$199/month",
      features: ["Website Development", "Basic Hosting", "Email Support"],
    },
    {
      title: "Professional Package",
      description: "Perfect for growing businesses needing advanced IT services.",
      price: "$499/month",
      features: [
        "Website + Mobile App Development",
        "Premium Hosting",
        "24/7 Support",
        "SEO Optimization",
      ],
    },
    {
      title: "Enterprise Package",
      description: "Customized solutions for large enterprises with complex needs.",
      price: "$999/month",
      features: [
        "Custom Software Development",
        "Dedicated Hosting",
        "Priority Support",
        "Digital Marketing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Packages</h1>
        <p className="text-lg text-gray-600 w-3/5 mx-auto">
          Discover the perfect package tailored to your business needs.
          From startups to enterprises, we offer comprehensive solutions to help
          you succeed. Choose a package and elevate your business to new heights!
        </p>
      </div>


      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              {pkg.title}
            </h2>
            <p className="text-gray-600 mb-4">{pkg.description}</p>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {pkg.price}
            </p>
            <ul className="mb-4">
              {pkg.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-gray-700 flex items-center mb-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
