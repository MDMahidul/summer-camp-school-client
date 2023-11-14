import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loader = () => {
    return (
      <div className="h-screen flex justify-center items-center flex-col">
        <PuffLoader size={100} color="#ffb606"></PuffLoader>
      </div>
    );
};

export default Loader;