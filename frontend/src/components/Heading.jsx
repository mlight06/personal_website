import React from 'react';
import { motion } from 'framer-motion';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Heading() {
  return (
    <div id="heading_main">
      <div id="welcome">
        <motion.div
          animate={{ x: 100 }}
          // transition={{ type: 'spring', stiffness: 100, delay: 1 }}
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
          }}
        >
          Welcome!
        </motion.div>
      </div>
      <div>

        <motion.div
          // animate={{
          //   x: ['0rem', '10rem', '-10rem', '0rem'],
          //   y: ['0px', '20px', '0px'],
          // }}
          animate={{ x: -50 }}
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
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
          // animate={{
          //   x: ['0rem', '-10rem', '10rem', '0rem'],
          //   y: ['0px', '20px', '0px'],
          // }}
          animate={{ x: 50 }}
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
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
          // animate={{
          //   x: ['0rem', '10rem', '-10rem', '0rem'],
          //   y: ['0px', '20px', '0px'],
          // }}
          animate={{ x: -50 }}
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
          }}
        >
          <Paper
            className="introduction"
          >
            Thanks for checking out my website.
          </Paper>
        </motion.div>
        <motion.div
          // animate={{
          //   x: ['0rem', '-10rem', '10rem', '0rem'],
          //   y: ['0px', '20px', '0px'],
          // }}
          animate={{ x: 50 }}
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
          }}
        >
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
      <div className="icons">
        <Link to="https://www.linkedin.com/in/michaelklight">

          <LinkedInIcon color="primary" sx={{ fontSize: 60 }} />
        </Link>
        {/* <Link> */}
        <EmailIcon sx={{ color: 'white', fontSize: 60 }} />

        {/* </Link> */}
      </div>
    </div>
  );
}
