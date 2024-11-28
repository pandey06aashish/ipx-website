import React, { useState, useEffect, useRef } from "react";
import feedback from '../assets/feedback.png';
import project_img from '../assets/project_img.jpg';
import customer from '../assets/customer.jpg';


const Achievements = () => {
  const [projectsDone, setProjectsDone] = useState(0);
  const [customerRating, setCustomerRating] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
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
        const step = target / (700 / interval);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            setNumber(target);
            clearInterval(timer);
          } else {
            setNumber(Math.round(current * 10) / 10);
          }
        }, interval);
      };

      incrementNumber(setProjectsDone, 350, 50);
      incrementNumber(setCustomerRating, 4.7, 50);
      incrementNumber(setCustomers, 300, 50);
    }
  }, [inView]);

  return (
    <section ref={sectionRef} className="bg-beige py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-8">
          OUR ACHIEVEMENTS IN NUMBERS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <img
            src={project_img}
            alt="Projects"
            className="w-30 h-30 mb-4"
          />
          <div className="text-blue-500 text-6xl font-bold">{`${projectsDone}+`}</div>
          <p className="text-lg mt-2 font-medium text-gray-800">PROJECT DONE</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={feedback}
            alt="Customer Rating"
            className="w-30 h-30 mb-4"
          />
          <div className="text-blue-500 text-6xl font-bold">{`${customerRating}+`}</div>
          <p className="text-lg mt-2 font-medium text-gray-800">
            CUSTOMER RATING
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={customer}
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
