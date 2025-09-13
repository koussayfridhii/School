import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-background shadow-lg rounded-lg overflow-hidden border border-color-muted/10 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`p-6 border-b border-color-muted/10 ${className}`}>
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
    <div className={`p-6 border-t border-color-muted/10 bg-background ${className}`}>
      {children}
    </div>
  );
};

export default Card;
