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
          <motion.div
            animate={{ x: [10, -30, 0], y: [-40, 10, 0] }}
            transition={{
              type: 'linear',
              duration: 2,
              x: { duration: 1 },
            }}
          >
            About Me
          </motion.div>
        </div>
        <div className="about_me_information">
          <motion.div
            // animate={{ rotate: -360 }}
            // transition={{ type: 'spring' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <Paper elevation={3} className="about-me-paper" sx={{ background: 'linear-gradient(red, orange)', width: '50rem' }}>
              <div className="about-me-typography">

                Hello! My name is Michael and I have lived in beautiful Colorado for all my life.
              </div>
            </Paper>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <Paper elevation={3} className="about-me-paper" sx={{ background: 'linear-gradient(#CBCB04, #287A0A)', width: '50rem' }}>
              <div className="about-me-typography">

                After 10 years in the healthcare industry I made a pivot into software, and couldn't
                be happier!
                What I enjoy most about development is the problem-solving aspect.
                I pride myself on critical thinking and figuring out the most efficient
                and optimal way to solve a tough problem.
              </div>
            </Paper>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <Paper elevation={3} className="about-me-paper" sx={{ background: 'linear-gradient(blue, purple)', width: '50rem' }}>
              <div className="about-me-typography">
                I love to travel, and being a software developer has given me the ability
                to explore more, for which I am very grateful. This summer I started
                playing golf, which has been a ton of fun!
                Always happy to connect, so feel free to reach out.
              </div>
            </Paper>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
