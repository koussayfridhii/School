import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/80 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary/80 focus:ring-secondary',
    accent: 'bg-accent text-white hover:bg-accent/80 focus:ring-accent',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
