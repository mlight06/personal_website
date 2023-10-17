import React from 'react';
import { Button } from '@mui/material';
import Menu from './Menu';

export default function AboutMe() {
  return (
    <div id="main">
      <div>
        <Menu />
      </div>
      <div>
        Hello! My name is Michael and I have lived in beatiful Colorado for all my life.
      </div>
      <div>
        After 10 years in the healthcare industry I made a pivot into software, and couldn't
        be happier!
        What I enjoy most about software is the problem-solving aspect.
        I pride myself on critical thinking and figuring out solutions to problems that need
        solving.
      </div>
      <Button href="/">
        Back to Home
      </Button>
    </div>
  );
}
