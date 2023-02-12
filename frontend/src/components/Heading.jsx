import React from 'react';
import { motion } from 'framer-motion';
import { Paper } from '@mui/material';

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
            id="introduction"
            elevation={3}
          >
            <div>
              I`m Michael Light
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
            elevation={3}
          >
            <div id="introduction">
              and I`m a fullstack software developer
            </div>
          </Paper>
        </motion.div>
      </div>
    </div>
  );
}
