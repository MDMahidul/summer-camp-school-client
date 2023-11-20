import React from 'react';

const InstructorCard = ({ instructor }) => {
  const { name, image} = instructor;
  return (
    <div className="card card-compact max-w-md  shadow-xl">
      <figure>
        <img
          className="w-96 h-96 object-cover hover:grayscale transition-all duration-300"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-gray-800 dark:text-white">
        <h2 className="card-title ">{name}</h2>
      </div>
    </div>
  );
};

export default InstructorCard;