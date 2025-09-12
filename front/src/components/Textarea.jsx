import React from 'react';

const Textarea = ({ id, name, placeholder, value, onChange, className = '', rows = 4 }) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${className}`}
    />
  );
};

export default Textarea;
