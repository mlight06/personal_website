import React from 'react';
import Heading from './Heading';
import Menu from './Menu';

export default function HomePage() {
  return (
    <div id="main">

      <div className="menu-sidebar">
        <Menu />

      </div>
      <div>
        <Heading />

      </div>
    </div>
  );
}
