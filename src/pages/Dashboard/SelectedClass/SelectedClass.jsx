import React from 'react';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';

const SelectedClass = () => {
    return (
      <>
        <div className="container mx-auto px-4 sm:px-8 py-8">
          <DashboardHeader title={"My Selected Classes"} />
        </div>
      </>
    );
};

export default SelectedClass;