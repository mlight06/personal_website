import React from 'react';
import { motion } from 'framer-motion';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Heading() {
  return (
    <div id="heading_main">
      <div id="welcome">
        <motion.div
          animate={{ x: -100 }}
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
          animate={{ x: -80 }}
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
          }}
        >
          {/* <Paper
            variant="outlined"
            className="introduction"
            elevation={0}
          > */}
          <div className="introduction">
            {'I\'m Michael Light'}
          </div>
          {/* </Paper> */}
        </motion.div>
        <motion.div
          animate={{ x: -50 }}
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
          }}
        >
          {/* <Paper */}
          {/* variant="outlined"
            elevation={0}
            className="introduction"
          > */}
          <div className="introduction">
            {'and I\'m a fullstack software developer'}
          </div>
          {/* </Paper> */}
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
          {/* <Paper
            className="introduction"
          > */}
          <div className="introduction">

            Thanks for checking out my website.
          </div>
          {/* </Paper> */}
        </motion.div>
        <motion.div
          // animate={{
          //   x: ['0rem', '-10rem', '10rem', '0rem'],
          //   y: ['0px', '20px', '0px'],
          // }}
          animate={{ x: -50 }}
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 },
          }}
        >
          {/* <Paper
            variant="outlined"
            elevation={0}
            className="introduction"
          > */}
          <div className="introduction">

            <Link to="/aboutme">

              Click here to see more
            </Link>
          </div>
          {/* </Paper> */}
        </motion.div>
      </div>
      <motion.div
        animate={{ x: -90 }}
        transition={{
          ease: 'linear',
          duration: 2,
          x: { duration: 1 },
        }}
      >
        <div className="icons">
          <Link to="https://www.linkedin.com/in/michaelklight">

            <LinkedInIcon color="primary" sx={{ fontSize: 60 }} />
          </Link>
          <Link to="mailto:mklight06@gmail.com">

            <EmailIcon sx={{ color: 'white', fontSize: 60 }} />
          </Link>
          <Link to="https://www.github.com/mlight06">

            <GitHubIcon sx={{ color: 'grey', fontSize: 60 }} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
