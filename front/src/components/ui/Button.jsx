import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '' }) => {
  const baseStyle = 'px-6 py-2.5 rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-background-dark';

  const variants = {
    primary: 'bg-brand text-white hover:bg-brand-dark focus:ring-brand',
    secondary: 'bg-secondary-dark text-white hover:bg-gray-600 focus:ring-secondary-dark',
    outline: 'bg-transparent border border-brand text-brand hover:bg-brand hover:text-white dark:text-brand-light dark:border-brand-light dark:hover:bg-brand-light dark:hover:text-background-dark',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
