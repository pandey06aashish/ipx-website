import React, { useState } from "react";
// Replace with your actual image

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto space-y-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800">
          About Us
        </h2>

        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
            <p className="text-gray-600">
              At <span className="font-semibold">TrendAura</span>, we are
              dedicated to delivering exceptional products and services that
              empower businesses to thrive in the digital world. Our team of
              experts ensures that every project we undertake exceeds
              expectations.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "TrendAura transformed our vision into a beautifully functional
                product. Highly recommend their services!"
              </p>
              <p className="text-right text-blue-500 font-medium">- John Doe</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={""}
              alt="About Us"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Who We Are</h3>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>Innovative and user-centric solutions.</li>
              <li>Experienced team of developers and designers.</li>
              <li>Commitment to quality and timely delivery.</li>
              <li>Transparent processes and client-focused approach.</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={""}
              alt="Who We Are"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full md:w-3/4 mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {[
              {
                question: "What services do you offer?",
                answer:
                  "We offer website development, mobile app development, software solutions, and other IT services tailored to your needs.",
              },
              {
                question: "Why should I choose TrendAura?",
                answer:
                  "Our team prioritizes quality, innovation, and client satisfaction. We work closely with you to ensure your goals are met effectively.",
              },
              {
                question: "How can I contact your team?",
                answer:
                  "You can reach us through our contact form, email, or phone. Visit the Contact Us section for details.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <button
                  className="w-full text-left text-gray-800 font-medium flex justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{openFaq === index ? "-" : "+"}</span>
                </button>
                {openFaq === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
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
