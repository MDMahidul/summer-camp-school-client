import React from 'react';

const SectionHeader = ({heading}) => {
    return (
      <div className="font-second_font text-center md:w-4/12 mx-auto py-10 ">
        <h3 className="text-4xl dark:text-white text-gray-900 py-4 ">{heading}</h3>
      </div>
    );
};

export default SectionHeader;