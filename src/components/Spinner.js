import React from 'react';
import Loading from '../assets/loading.svg';

const Spinner = () => {
  return (
    <div className="text-center my-5">
      <img src={Loading} alt="loading..." />
    </div>
  )
}

export default Spinner;