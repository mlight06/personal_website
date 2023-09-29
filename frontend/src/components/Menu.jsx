import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
// import Hobbies from './Hobbies';

export default function Menu() {
  return (
    <div className="menu-container">
      Menu
      {/* <Hobbies /> */}
      <div>
        <Button variant="text">
          <Link to="/hobbies">Hobbies</Link>
        </Button>
      </div>
      <div>
        <Button variant="text">
          <Link to="/portfolio">Portfolio</Link>
        </Button>
      </div>
    </div>
  );
}
