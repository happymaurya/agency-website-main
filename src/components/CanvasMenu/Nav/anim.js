// anim.js

export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 75,
    rotateY: -10,
    translateY: 120,
    translateZ: -200,
    scale: 0.9,
    filter: "blur(12px)",
  },

  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    translateY: 0,
    translateZ: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: 0.4 + i * 0.12,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.4 },
      scale: { type: "spring", stiffness: 120, damping: 18 },
    },
  }),

  exit: {
    opacity: 0,
    translateY: 80,
    scale: 0.95,
    filter: "blur(8px)",
    transition: {
      duration: 0.45,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slideIn = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(6px)",
  },

  enter: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: 0.7 + i * 0.08,
      ease: [0.215, 0.61, 0.355, 1],
      scale: { type: "spring", stiffness: 140, damping: 20 },
    },
  }),

  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    filter: "blur(4px)",
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

/* ✨ Optional: hover micro-interaction variant */
export const hoverEffect = {
  rest: {
    scale: 1,
    rotateZ: 0,
  },
  hover: {
    scale: 1.06,
    rotateZ: -0.5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};
