import React from 'react';
import { Button } from '@mui/material';
import Menu from './Menu';

export default function Projects() {
  return (
    <div id="main">
      <div>
        <Menu />
      </div>
      Projects
      <div>
        <Button href="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
