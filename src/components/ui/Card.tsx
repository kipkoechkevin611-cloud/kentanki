import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
