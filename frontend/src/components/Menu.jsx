import React from 'react';
import { Link } from 'react-router-dom';
// import Hobbies from './Hobbies';

export default function Menu() {
  return (
    <div>
      Menu
      {/* <Hobbies /> */}
      <Link to="/hobbies">Hobbies</Link>
    </div>
  );
}
