import React from 'react';
import Banner from '../Banner/Banner/Banner';
import SportsProgrammes from '../SportsProgrammes/SportsProgrammes';
import Facilities from '../Facilities/Facilities';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
      <div>
        <Banner/>
        <SportsProgrammes/>
        <Facilities/>
        <Testimonials/>
      </div>
    );
};

export default Home;