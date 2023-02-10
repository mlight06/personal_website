import React from 'react';
import { motion } from 'framer-motion';

export default function Heading() {
  return (
    <div id="heading_main">
      <motion.div
        animate={{
          x: 0,
          y: 2,
          rotate: 2,
        }}
      >

        <div id="introduction">
          I`m Michael Light
        </div>
      </motion.div>
      <div id="introduction_two">
        and I`m a fullstack software developer
      </div>
    </div>
  );
}
