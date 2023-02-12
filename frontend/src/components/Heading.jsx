import React from 'react';
import { motion } from 'framer-motion';

export default function Heading() {
  return (
    <div id="heading_main">
      <motion.div
        animate={{
          x: ['0rem', '10rem', '-10rem', '0rem'],
          y: ['0px', '20px', '0px'],
        }}
      >
        <div id="introduction">
          I`m Michael Light
        </div>
      </motion.div>
      <motion.div
        animate={{
          x: ['0rem', '10rem', '-10rem', '0rem'],
          y: ['0px', '20px', '0px'],
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div id="introduction">
          and I`m a fullstack software developer
        </div>
      </motion.div>
    </div>
  );
}
