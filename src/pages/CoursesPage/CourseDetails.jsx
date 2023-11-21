import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ScrollPageTop from '../../components/ScrollPageTop/ScrollPageTop';
import Container from '../../Components/Container/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import FadeInAnimation from '../../components/FadeInAnimation/FadeInAnimation';
import { AuthContext } from '../../providers/AuthProvider';

const CourseDetails = () => {
    const { role } = useContext(AuthContext);
    const course = useLoaderData();
    return (
      <div
        className="dark:bg-gray-800 pb-10 lg:pb-20 md:pt-20"
        id="instructors"
      >
        <ScrollPageTop />
        <Container>
          <SectionHeader heading={"Course Details"}></SectionHeader>
          <FadeInAnimation>
            <div className="flex flex-col md:flex-row justify-evenly items-center md:mt-2 gap-5">
              <img
                className="w-72 h-auto md:w-96 md:h-auto lg:w-[26rem] lg:h-[25rem] object-cover rounded"
                src={course?.image}
                alt=""
              />
              <div className="text-gray-700 dark:text-white max-w-xl flex flex-col gap-1">
                <p className="md:text-3xl text-xl font-semibold">
                  {course.course_name}
                </p>
                <p className="p_des">
                  <span className="span_label">Instructor: </span>
                  {course?.instructor_name}
                </p>
                <p className="p_des">
                  <span className="span_label">Email: </span>
                  {course?.email}
                </p>
                <p className="p_des">
                  <span className="span_label">Available Seats: </span>
                  {course?.seats - course?.enrolled}
                </p>
                <p className="p_des">
                  <span className="span_label">Enrolled: </span>
                  {course?.enrolled}
                </p>
                <p className="p_des">
                  <span className="span_label">Price:</span> {course?.price}
                </p>
                <p className="p_des">
                  <span className="span_label">Description:</span>{" "}
                  {course?.description}
                </p>
                <button
                  className={`btn custom-btn transition-all hover:scale-95 text-white mt-5 bg-amber-500`}
                  disabled={
                    course?.seats - course?.enrolled <= 0 ||
                    role === "Admin" ||
                    role === "Instructor"
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </FadeInAnimation>
        </Container>
      </div>
    );
};

export default CourseDetails;