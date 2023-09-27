import React from 'react';
import { motion } from 'framer-motion';
import { Paper } from '@mui/material';

import photo from '../images/profile.png';

export default function Heading() {
  return (
    <div id="heading_main">
      <div>

        <motion.div
          animate={{
            x: ['0rem', '10rem', '-10rem', '0rem'],
            y: ['0px', '20px', '0px'],
          }}
        >
          <Paper
            variant="outlined"
            className="introduction"
            elevation={3}
          >
            <div>
              {'I\'m Michael Light'}
            </div>
          </Paper>
        </motion.div>
        <motion.div
          animate={{
            x: ['0rem', '-10rem', '10rem', '0rem'],
            y: ['0px', '20px', '0px'],
          }}
        >
          <Paper
            variant="outlined"
            elevation={3}
            className="introduction"
          >
            <div>
              {'and I\'m a fullstack software developer'}
            </div>
          </Paper>
        </motion.div>
        <motion.div
          animate={{
            x: ['0rem', '10rem', '-10rem', '0rem'],
            y: ['0px', '20px', '0px'],
          }}
        >
          <Paper
            className="introduction"
          >
            Thanks for checking out my website.
          </Paper>
        </motion.div>
        <motion.div
          animate={{
            x: ['0rem', '-10rem', '10rem', '0rem'],
            y: ['0px', '20px', '0px'],
          }}
        >
          <div className="image-container">
            <img src={photo} className="profile-pic" alt="profile" />
          </div>
          <Paper
            variant="outlined"
            elevation={3}
            className="introduction"
          >
            <div>
              Click here to see more
            </div>
          </Paper>
        </motion.div>
      </div>
    </div>
  );
}
