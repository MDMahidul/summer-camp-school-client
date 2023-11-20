import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import FadeInAnimation from '../../components/FadeInAnimation/FadeInAnimation';
import { Link } from 'react-router-dom';

const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([]);

    /* get the user data from db */
   /*  axios
      .get(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((response) => {
        setInstructors(response.data);
      })
      .catch((err) => console.log(err.messgae)); */
      useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/instructors`)
          .then(res=>res.json())
          .then(data=>{
            setInstructors(data);
          })
      },[])
    return (
      <div className="dark:bg-gray-800 pb-10 lg:pb-20 mt-20" id="instructors">
        <Container>
          <SectionHeader heading={"Our Instructors"}></SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-3  md:gap-10 lg:gap-7 gap-5 ">
            {instructors.map((instructor, index) => (
              <FadeInAnimation key={instructor._id} custom={index}>
                <div className="card card-compact max-w-md  shadow-xl">
                  <figure>
                    <img
                      className="w-96 h-96 object-cover hover:grayscale transition-all duration-300"
                      src={instructor.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body text-gray-800 dark:text-white">
                    <h2 className="card-title ">{instructor.name}</h2>
                    <p className="-mt-2 text-base">
                      <span className="font-semibold">Email:</span>{" "}
                      {instructor.email}
                    </p>
                    <span>
                      <Link
                        to={`/user/${instructor.email}`}
                        className="btn btn-sm text-white bg-amber-500 custom-btn"
                      >
                        Learn More
                      </Link>
                    </span>
                  </div>
                </div>
              </FadeInAnimation>
            ))}
          </div>
        </Container>
      </div>
    );
};

export default InstructorsPage;