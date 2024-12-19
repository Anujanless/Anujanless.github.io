import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimationWrapper = ({ children, triggerOnce = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: triggerOnce }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;