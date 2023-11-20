import React from 'react';
import Banner from '../Banner/Banner/Banner';
import SportsProgrammes from '../SportsProgrammes/SportsProgrammes';
import Facilities from '../Facilities/Facilities';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import ScrollUp from '../../../components/ScrollUp/ScrollUp';
import Partners from '../Partners/Partners';
import InstructorsList from '../Instructor/InstructorsList';

const Home = () => {
    return (
      <div>
        <Banner/>
        <SportsProgrammes/>
        <Facilities/>
        <InstructorsList/>
        <Testimonials/>
        <Contact/>
        <Partners/>
        <ScrollUp/>
      </div>
    );
};

export default Home;