import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full flex flex-col md:flex-row">
        {/* Left Side - Description */}
        <div className="md:w-1/2 p-4">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
         We'd 
          <span className="text-blue-500"> Love</span> <br />  to hear from you! 
        </h1>

        <p className="mt-4 text-lg text-neutral-600">
        Whether you have a question about our services, need support, or just want to say hello,
            feel free to reach out to us. Fill out the form, and we’ll get back to you as soon as
            possible.
        </p>
        </div>

        <div className="md:w-1/2 p-4">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
