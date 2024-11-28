import React from "react";

const Whyus = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black tracking-wide">
          WHY IPX
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          WE BLEND EXPERTISE, INNOVATION, COLLABORATION, AND RESULTS SEAMLESSLY.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 "> 
        <div className="bg-blue-500 text-white p-8 rounded-md shadow-md duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-xl font-semibold mb-4">
            Certified Professional & Experts
          </h2>
          <p className="text-base leading-relaxed">
            Being a certified and experienced Mobile App and Website Development
            agency in India, we have a team of certified experts.
          </p>
        </div>

        <div className="bg-blue-500 text-white p-8 rounded-md shadow-md duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-xl font-semibold mb-4 ">
            We're fast, Accurate & Reliable
          </h2>
          <p className="text-base leading-relaxed">
            Investing in a company to maximize a business’s growth is one of the
            huge intangible decisions one can make. But ipx Software Pvt.
            Ltd. has been a trusted partner.
          </p>
        </div>

        <div className="bg-blue-500 text-white p-8 rounded-md shadow-md duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-xl font-semibold mb-4">
            We support you round the clock
          </h2>
          <p className="text-base leading-relaxed">
            We understand you might have doubts while investing in a company
            handing over your project. We support you 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
