import React from 'react';
import Banner from '../Banner/Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import ScrollUp from '../../../components/ScrollUp/ScrollUp';
import Partners from '../Partners/Partners';
import InstructorsList from '../Instructor/InstructorsList';
import ScrollPageTop from '../../../components/ScrollPageTop/ScrollPageTop';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
      <div>
        <ScrollPageTop/>
        <Banner/>
        <Courses/>
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