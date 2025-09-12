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
      className={`w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white ${className}`}
    />
  );
};

export default Input;
