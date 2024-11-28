import React, { useState } from "react";

const Review = [
  {
    id: 1,
    name: "John Smith",
    review:
      "Working with Mariox has been a transformative experience for our company. Their CEO, Sarah Johnson, has been instrumental in guiding our digital strategy and implementing innovative solutions that have significantly improved our business operations.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Anil Mehta",
    review:
      "My efforts in app development have changed massively thanks to Mariox. They have tremendously sophisticated technologies that I use to streamline campaigns, analyze data, and improve outcomes. Highly advisable.",
    image: "https://via.placeholder.com/150",
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
    <div className="bg-[#fdfaf5] py-16 px-8">
      <h2 className="text-4xl font-bold text-center">
        OUR CLIENTS <span className="text-[#ef4a23]">{`{LOVE}`}</span> US
      </h2>
      <div className="flex flex-col items-center mt-12">
        <div className="flex items-start gap-8">
          <div className="flex flex-col items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <span className="mt-4 font-bold text-[#ef4a23]">
              {testimonials[currentIndex].name}
            </span>
          </div>
          <div className="max-w-xl">
            <p className="text-center text-gray-700">
              {testimonials[currentIndex].review}
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-2 border rounded-md shadow-md hover:bg-gray-200"
          >
            &#x276E;
          </button>
          <button
            onClick={handleNext}
            className="p-2 border rounded-md shadow-md hover:bg-gray-200"
          >
            &#x276F;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
