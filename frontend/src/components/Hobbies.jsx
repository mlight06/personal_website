import React from 'react';
import { Link } from 'react-router-dom';
import nyc from '../images/nyc.jpg';
import santaBarbara from '../images/santa_barbara.jpg';
import laJunta from '../images/la_junta.jpg';
import mtRainier from '../images/mt_rainier.jpg';
import vancouver from '../images/vancouver.jpg';

export default function Hobbies() {
  return (
    <div>
      <Link to="/">Back to Home</Link>

      <div>
        I love to travel!
      </div>
      <div>
        In 2023, I made it to the following places:
      </div>
      <div className="hobbies-pic-container">

        <div>
          <img src={nyc} alt="nyc" className="hobbies-pic" />
        </div>
        <div>
          This was taken from the Staten Island ferry, August 2023
        </div>
      </div>
      <div className="hobbies-pic-container">

        <div>
          <img src={santaBarbara} alt="nyc" className="hobbies-pic" />
        </div>
        <div>
          A beautiful view of Santa Barbara, CA May 2023
        </div>
      </div>
      <div className="hobbies-pic-container">
        <div>
          <img src={laJunta} alt="nyc" className="hobbies-pic" />
        </div>
        <div>
          La Junta Beach, CA May 2023
        </div>
      </div>
      <div className="hobbies-pic-container">
        <div>
          <img src={mtRainier} alt="nyc" className="hobbies-pic" />
        </div>
        <div>
          Mt. Rainier standing tall in the background, Washington June 2023
        </div>
      </div>
      <div className="hobbies-pic-container">
        <div>
          <img src={vancouver} alt="nyc" className="hobbies-pic" />
        </div>
        <div>
          The architecture of Vancouver is breathtaking, June 2019
        </div>
      </div>
    </div>

  );
}
