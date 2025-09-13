import React from 'react';

const Input = ({ id, name, type = 'text', placeholder, value, onChange, className = '' }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border border-color-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background placeholder-color-muted text-color-default ${className}`}
    />
  );
};

export default Input;
