import React from 'react';
import Heading from './Heading';
import Menu from './Menu';
import { Container } from '@mui/material';
import Navigation from './NewHomePage';

export default function HomePage() {

  return (
    <div >
      {/* <Container>
        <div className="menu-sidebar">
          <Menu />
        </div>
        <div>
          <Heading />
        </div>
      </Container> */}
      <Navigation />
    </div>
  );
}
