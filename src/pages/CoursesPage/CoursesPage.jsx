import React from 'react';
import Container from '../../Components/Container/Container';
import ScrollPageTop from '../../components/ScrollPageTop/ScrollPageTop';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useQuery } from 'react-query';
import axios from 'axios';
import EmptyData from "../../components/EmptyData/EmptyData";
import FadeInAnimation from '../../components/FadeInAnimation/FadeInAnimation';
import CourseCard from '../Home/Courses/CourseCard';

const CoursesPage = () => {
  /* get all course data */
  const { data: courses = [], refetch } = useQuery({
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/courses`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="dark:bg-gray-800 pb-10 lg:pb-20 mt-20" id="courses">
      <ScrollPageTop />
      <Container>
        <SectionHeader heading={"Our Courses"}></SectionHeader>
        {courses && Array.isArray(courses) && courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3  md:gap-10 lg:gap-7 gap-5 ">
            {courses.map((course, index) => (
              <FadeInAnimation custom={index} key={course.id}>
                <CourseCard course={course}></CourseCard>
              </FadeInAnimation>
            ))}
          </div>
        ) : (
          <EmptyData message={"No Course Data Found"} />
        )}
      </Container>
    </div>
  );
};

export default CoursesPage;