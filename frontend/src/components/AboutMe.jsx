import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { easeInOut, motion } from 'framer-motion';
import { LinearScale } from '@mui/icons-material';
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
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ type: 'spring' }}
          >
            <Paper elevation={3} className="about-me-paper" sx={{ background: 'linear-gradient(red, orange)', width: '50rem' }}>
              <div className="about-me-typography">

                Hello! My name is Michael and I have lived in beatiful Colorado for all my life.
              </div>
            </Paper>
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ type: 'spring', delay: 1 }}
          >
            <Paper elevation={3} className="about-me-paper" sx={{ background: 'linear-gradient(#B5CB15, green)', width: '50rem' }}>
              <div className="about-me-typography">

                After 10 years in the healthcare industry I made a pivot into software, and couldn't
                be happier!
                What I enjoy most about software is the problem-solving aspect.
                I pride myself on critical thinking and figuring out solutions to problems that need
                solving.
              </div>
            </Paper>
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ type: 'spring', delay: 2 }}
          >
            <Paper elevation={3} className="about-me-paper" sx={{ background: 'linear-gradient(blue, purple)', width: '50rem' }}>
              <div className="about-me-typography">
                I love to travel, and being a software developer has given me the ability
                to explore more, for which I am very grateful. This summer, I also started
                playing golf, which has been great!
                Always happy to connect, so feel free to reach out
              </div>
            </Paper>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
