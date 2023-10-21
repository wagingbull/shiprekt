import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface FadeInAnimationProps {
  children: React.ReactNode;
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const FadeInAnimation: FC<FadeInAnimationProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
