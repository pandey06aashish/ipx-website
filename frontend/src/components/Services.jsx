import React from 'react'
import { FaLaptopCode, FaCogs, FaRocket } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
      <section id="services" className="py-16 bg-white ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-black tracking-wide">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-12">
            <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <FaLaptopCode className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p>
                We specialize in creating scalable, responsive, and high-performance
                websites and web applications.
              </p>
            </div>
            <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <FaCogs className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Solutions</h3>
              <p>
                Our team builds custom software solutions tailored to the unique needs
                of your business.
              </p>
            </div>
            <div className="service-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <FaRocket className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p>
                We help businesses digitize their processes and move forward in the
                digital age.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services