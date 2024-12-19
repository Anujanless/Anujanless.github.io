"use client";
import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
};

const layers = [
  { color: "#2e2257", delay: 0.2, zIndex: 30 },
  { color: "#3b2d71", delay: 0.4, zIndex: 20 },
  { color: "#4b3792", delay: 0.6, zIndex: 10 },
];

const Transition = () => {
  const sharedStyles = "fixed right-0 h-screen w-screen bottom-full";

  return (
    <div className='fixed inset-0 z-[9999]'>
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className={`${sharedStyles} z-[${layer.zIndex}]`}
          style={{ backgroundColor: layer.color, zIndex: layer.zIndex }}
          variants={TransitionVariants}
          initial="initial"
          animate="animate"
          transition={{
            delay: layer.delay,
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Transition;
