import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 focus:ring-primary-light dark:focus:ring-primary-dark',
    secondary: 'bg-secondary-light dark:bg-secondary-dark text-white hover:opacity-90 focus:ring-secondary-light dark:focus:ring-secondary-dark',
    outline: 'bg-transparent border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white',
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
