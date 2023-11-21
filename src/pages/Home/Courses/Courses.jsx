import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Container from "../../../Components/Container/Container";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import FadeInAnimation from "../../../components/FadeInAnimation/FadeInAnimation";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

const Courses = () => {
  /* get all course data */
  const { data: courses = [], refetch } = useQuery({
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/courses`);
      console.log(res.data);
      return res.data;
    },
  });
  /* show only 6 data first */
  const visibleCourses = courses.slice(0, 6);

  return (
    <div className="dark:bg-gray-800 pb:10 md:pb-20" id="programmes">
      <Container>
        <SectionHeader heading={"Our Sports Courses"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleCourses.map((course, index) => (
            <FadeInAnimation custom={index} key={course.id}>
              <CourseCard course={course}></CourseCard>
            </FadeInAnimation>
          ))}
        </div>
        <FadeInAnimation custom={1}>
          <div className="text-center">
              <Link to="/courses"
                className="btn bg-amber-500 hover:bg-amber-600 mt-8 text-white border-0 transition-transform transform hover:scale-95"
              >
                See More
              </Link>
          </div>
        </FadeInAnimation>
      </Container>
    </div>
  );
};

export default Courses;
