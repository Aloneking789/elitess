import { motion } from "framer-motion";
import React from "react";

export const Boxes = () => {
  const rows = 8;
  const cols = 12;

  const boxVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: [0.4, 0.1, 0.4],
      y: 0,
      transition: {
        opacity: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: index * 0.1,
        },
        y: {
          duration: 1,
          delay: index * 0.1,
        },
      },
    }),
  };

  return (
    <div
      style={{
        transform: `translate(-40%, -50%) rotateX(60deg) rotateZ(-45deg)`,
        transformStyle: "preserve-3d",
      }}
      className="absolute left-1/2 top-1/2"
    >
      <div className="grid grid-cols-12 gap-4">
        {Array.from({ length: rows * cols }).map((_, index) => (
          <motion.div
            key={index}
            variants={boxVariants}
            initial="initial"
            animate="animate"
            custom={index}
            className="w-8 h-8 md:w-12 md:h-12 bg-white/10 border border-white/20 rounded-lg"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(${Math.random() * 50}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Optional Row component if you want to create a more complex grid structure
export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="flex gap-4 relative"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};
