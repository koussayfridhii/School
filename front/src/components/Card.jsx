import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`p-6 border-b border-neutral-200 dark:border-neutral-700 ${className}`}>
      {children}
    </div>
  );
};

export const CardBody = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = '' }) => {
  return (
    <div className={`p-6 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
