export const containerVariant = {
  hidden: { opacity: 1, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

// * form modal animation
export const formModalParentVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const formModalChildVariant = {
  hidden: { scaleY: 0.3, opacity: 0 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeIn" },
  },
  exit: {
    scaleY: 0.3,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// * dashboard sidebar animation
export const sidebarItemVariant = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.2, delay: 0.1 } },
  exit: { scaleX: 0, transition: { duration: 0.2 } },
};
