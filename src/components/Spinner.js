import React, { Component } from 'react';
import Loading from '../assests/loading.svg';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-5">
        <img src={Loading} alt="loading..." />
      </div>
    )
  }
}

export default Spinner