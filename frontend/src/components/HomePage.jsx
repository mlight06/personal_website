import React from 'react';
import Heading from './Heading';
import Menu from './Menu';
import { Container } from '@mui/material';

export default function HomePage() {
  return (
    <div id="main">
      <Container>
        <div className="menu-sidebar">
          <Menu />
        </div>
        <div>
          <Heading />
        </div>
      </Container>
    </div>
  );
}
