import React from 'react';
import { motion } from 'framer-motion';
import { Paper, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import photo from '../images/profile.png';
// import background from '../images/newbackground.png';

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
            elevation={0}
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
            elevation={0}
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
            {/* <img src={photo} className="profile-pic" alt="profile" /> */}
            <Avatar src={photo} sx={{ width: 300, height: 360 }} />
          </div>
          <Paper
            variant="outlined"
            elevation={0}
            className="introduction"
          >

            <Link to="/aboutme">

              Click here to see more
            </Link>
          </Paper>
        </motion.div>
      </div>
    </div>
  );
}
