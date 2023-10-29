import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import Menu from './Menu';

export default function AboutMe() {
  return (
    <div id="main">
      <div className="menu-sidebar">
        <Menu />
      </div>
      <div id="heading-aboutme">
        <div className="page-header">

          About Me
        </div>
        <div className="about_me_information">

          <Paper elevation={3} className="about-me-paper">
            <Typography>

              Hello! My name is Michael and I have lived in beatiful Colorado for all my life.
            </Typography>
          </Paper>
          <Paper elevation={3} className="about-me-paper">
            <Typography>

              After 10 years in the healthcare industry I made a pivot into software, and couldn't
              be happier!
              What I enjoy most about software is the problem-solving aspect.
              I pride myself on critical thinking and figuring out solutions to problems that need
              solving.
            </Typography>
          </Paper>
        </div>
      </div>
      <Button href="/">
        Back to Home
      </Button>
    </div>
  );
}
