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
          animate={{ y: [-100, 20, 0], x: [60, -20, 0] }}
          // transition={{ type: 'spring', stiffness: 100, delay: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 2,
            // x: { duration: 1 },
          }}
        >
          Welcome!
        </motion.div>
      </div>
      <div>

        <motion.div
          animate={{ y: [-50, 50, 0], x: [40, -20, 0] }}
          transition={{
            ease: 'easeOut',
            duration: 2,
          }}
        >
          <div className="introduction">
            {'I\'m Michael Light'}
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [40, -30, 0], x: [-40, 40, 0] }}
          transition={{
            ease: 'easeOut',
            duration: 2,
          }}
        >
          <div className="introduction">
            {'and I\'m a fullstack software developer'}
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [-90, 25, 0], x: [20, -70, 0] }}
          transition={{
            ease: 'easeOut',
            duration: 2,
          }}
        >
          <div className="introduction">
            Thanks for checking out my website.
          </div>

        </motion.div>
        <motion.div
          animate={{ y: [80, -20, 0], x: [-40, 35, 0] }}
          transition={{
            ease: 'easeOut',
            duration: 2,
          }}
        >
          <div className="introduction">
            <motion.div
              whileHover={{ scale: 0.8 }}
            >

              <Link to="/aboutme">
                Click here to see more
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [-100, 100, 0], x: [20, 40, 0] }}
        transition={{
          ease: 'easeOut',
          duration: 2,
        }}
      >
        <div className="icons">
          <motion.div
            whileHover={{ scale: 1.4 }}
          >

            <Link to="https://www.linkedin.com/in/michaelklight" rel="noopener noreferrer" target="_blank">

              <LinkedInIcon color="primary" sx={{ fontSize: 60 }} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.4 }}
          >
            <Link to="mailto:mklight06@gmail.com">

              <EmailIcon sx={{ color: 'white', fontSize: 60 }} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.4 }}
          >
            <Link to="https://www.github.com/mlight06" rel="noopener noreferrer" target="_blank">

              <GitHubIcon sx={{ color: 'grey', fontSize: 60 }} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
