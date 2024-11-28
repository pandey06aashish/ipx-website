import React, { useState } from "react";
import men1 from '../assets/men1.png';
import men2 from '../assets/men3.png';
import men3 from '../assets/men2.png';

const testimonials = [
  {
    id: 1,
    name: "Aashish Pandey",
    review:
      "Working with Ipx has been a transformative experience for our company. Their CEO, Amit Pandey, has been instrumental in guiding our digital strategy and implementing innovative solutions that have significantly improved our business operations.",
    image: men1,
  },
  {
    id: 2,
    name: "Vaishnavi Pandey",
    review:
      "My efforts in app development have changed massively thanks to Ipx. They have tremendously sophisticated technologies that I use to streamline campaigns, analyze data, and improve outcomes. Highly advisable.",
    image: men2,
  },
  {
    id: 3,
    name: "Pankaj Pandey",
    review:
      "My efforts in app development have changed massively thanks to Ipx. They have tremendously sophisticated technologies that I use to streamline campaigns, analyze data, and improve outcomes. Highly advisable.",
    image: men3,
  },

];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" bg-[#fdfaf5] py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        OUR CLIENTS <span className="text-blue-500">{`{LOVE}`}</span> US
      </h2>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-4/5 justify-between">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-60 h-60 md:w-72 md:h-72 lg:w-82 lg:h-82 object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 max-w-xl flex flex-col justify-center px-4 lg:px-0">
            {/* Client Name */}
            <span className="text-lg md:text-xl font-bold text-blue-500 text-center mb-4">
              {testimonials[currentIndex].name}
            </span>
            {/* Client Review */}
            <p className="text-sm md:text-base text-center text-gray-700">
              {testimonials[currentIndex].review}
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-8 justify-center">
          <button
            onClick={handlePrev}
            className="p-2 border rounded-md shadow-md hover:bg-gray-200 text-lg"
          >
            &#x276E;
          </button>
          <button
            onClick={handleNext}
            className="p-2 border rounded-md shadow-md hover:bg-gray-200 text-lg"
          >
            &#x276F;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
