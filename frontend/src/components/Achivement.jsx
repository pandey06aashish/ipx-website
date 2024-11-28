import React, { useState, useEffect, useRef } from "react";
import feedback from '../assets/feedback.png';
import project_img from '../assets/project_img.jpg';
import customer from '../assets/customer.jpg';


const Achievements = () => {
  const [projectsDone, setProjectsDone] = useState(0);
  const [customerRating, setCustomerRating] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [inView, setInView] = useState(false); // Track if the section is visible
  const sectionRef = useRef(null); // Ref for the achievements section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const incrementNumber = (setNumber, target, interval) => {
        let current = 0;
        const step = target / (700 / interval); // 5s animation with interval steps
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            setNumber(target);
            clearInterval(timer);
          } else {
            setNumber(Math.round(current * 10) / 10); // Keep one decimal place
          }
        }, interval);
      };

      incrementNumber(setProjectsDone, 350, 50); // 350+ Projects Done
      incrementNumber(setCustomerRating, 4.7, 50); // 4.7 Rating
      incrementNumber(setCustomers, 300, 50); // 300+ Customers
    }
  }, [inView]); // Run the animation when `inView` becomes true

  return (
    <section ref={sectionRef} className="bg-beige py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-8">
          OUR ACHIEVEMENTS IN NUMBERS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
        {/* Projects Done */}
        <div className="flex flex-col items-center">
          <img
            src={project_img} // Replace with your image link
            alt="Projects"
            className="w-30 h-30 mb-4"
          />
          <div className="text-blue-500 text-6xl font-bold">{`${projectsDone}+`}</div>
          <p className="text-lg mt-2 font-medium text-gray-800">PROJECT DONE</p>
        </div>

        {/* Customer Rating */}
        <div className="flex flex-col items-center">
          <img
            src={feedback} // Replace with your image link
            alt="Customer Rating"
            className="w-30 h-30 mb-4"
          />
          <div className="text-blue-500 text-6xl font-bold">{`${customerRating}+`}</div>
          <p className="text-lg mt-2 font-medium text-gray-800">
            CUSTOMER RATING
          </p>
        </div>

        {/* Customers */}
        <div className="flex flex-col items-center">
          <img
            src={customer} // Replace with your image link
            alt="Customers"
            className="w-30 h-30 mb-4"
          />
          <div className="text-blue-500 text-6xl font-bold">{`${customers}+`}</div>
          <p className="text-lg mt-2 font-medium text-gray-800">CUSTOMERS</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
