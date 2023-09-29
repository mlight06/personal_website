import React from 'react';
import { Link } from 'react-router-dom';
import nyc from '../images/nyc.jpg';

export default function Hobbies() {
  return (
    <div>
      <Link to="/">Back to Home</Link>

      <div>
        I love to travel!
      </div>
      <div className="hobbies-pic-container">

        <div>
          In 2023, I made it to the following places:
        </div>
        <div>
          <img src={nyc} alt="nyc" className="hobbies-pic" />
        </div>
      </div>
    </div>

  );
}
