import React, { useEffect, useState } from 'react';
import FadeInAnimation from '../../../components/FadeInAnimation/FadeInAnimation';
import InstructorCard from './InstructorCard';
import Container from '../../../components/Container/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InstructorsList = () => {
  const [instructors, setInstructors] = useState([]);

  /* get the user data from db */
/*   axios
    .get(`${import.meta.env.VITE_API_URL}/users`)
    .then((response) => {
      setInstructors(response.data);
    })
    .catch((err) => console.log(err.messgae)); */
    useEffect(()=>{
      fetch(`${import.meta.env.VITE_API_URL}/instructors`)
        .then((res) => res.json())
        .then((data) => {
          setInstructors(data);
        });
    },[])

  /* show only 6 data first */
  const visibleInstructors = instructors.slice(0, 6);

  return (
    <div className="dark:bg-gray-800 pb-10 lg:pb-20" id="instructors">
      <Container>
        <SectionHeader heading={"Our Instructors"}></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-3  md:gap-10 lg:gap-7 gap-5 ">
          {visibleInstructors.map((instructor, index) => (
            <FadeInAnimation key={instructor.id} custom={index}>
              <InstructorCard instructor={instructor}></InstructorCard>
            </FadeInAnimation>
          ))}
        </div>
        <FadeInAnimation custom={1}>
          <div className="text-center">
              <Link to='/instructors'
                className="btn bg-amber-500 hover:bg-amber-600 mt-8 text-white border-0 transition-transform transform hover:scale-95"
              >
                See More
              </Link>
          </div>
        </FadeInAnimation>
      </Container>
    </div>
  );
}

export default InstructorsList;