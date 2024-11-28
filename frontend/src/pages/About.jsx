import React, { useState } from "react";
import Whowe from '../assets/whowe.png';
import About_us2 from '../assets/Aboutus.png';



const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
              Who  <br className="hidden md:block" />
              <span className="text-blue-500">We</span> Are.
            </h1>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Innovative and user-centric solutions.</li>
              <li>Experienced team of developers and designers.</li>
              <li>Commitment to quality and timely delivery.</li>
              <li>Transparent processes and client-focused approach.</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={Whowe}
              alt="Who We Are"
              className="rounded-lg  object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
              Why <br className="hidden md:block" />
              <span className="text-blue-500">Choose</span> Us.
            </h1>
            <p className="text-gray-600">
              At <span className="font-semibold">IPX</span>, we are
              dedicated to delivering exceptional products and services that
              empower businesses to thrive in the digital world. Our team of
              experts ensures that every project we undertake exceeds
              expectations.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={About_us2}
              alt="About Us"
              className="rounded-lg shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>



        <div className="w-full md:w-full mx-auto">
          <h3 className="text-4xl font-bold text-black text-center mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {[{ question: "What services do you offer?", answer: "We offer website development, mobile app development, software solutions, and other IT services tailored to your needs." },
            { question: "Why should I choose IPX?", answer: "Our team prioritizes quality, innovation, and client satisfaction. We work closely with you to ensure your goals are met effectively." },
            { question: "How can I contact your team?", answer: "You can reach us through our contact form, email, or phone. Visit the Contact Us section for details." }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <button
                  className="w-full text-left text-gray-800 font-medium flex justify-between text-xl"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{openFaq === index ? "-" : "+"}</span>
                </button>
                {openFaq === index && (
                  <p className="mt-4 text-gray-600 text-lg">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
