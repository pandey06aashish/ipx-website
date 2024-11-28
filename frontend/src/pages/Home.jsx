import React from 'react';
import Header from '../components/Header';
import Achievements from '../components/Achivement';
import Whyus from '../components/Whyus';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';


const Home = () => {
  return (
    <div>

      <Header />
      <Services />
      <Whyus />
      <Testimonials />
      <Achievements />
    </div>
  );
};

export default Home;
