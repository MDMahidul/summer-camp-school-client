import React from 'react';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';

const EnrolledClasses = () => {
    return (
      <>
        <div className="container mx-auto px-4 sm:px-8 py-8">
          <DashboardHeader title={"My Enrolled Classes"} />
        </div>
      </>
    );
};

export default EnrolledClasses;