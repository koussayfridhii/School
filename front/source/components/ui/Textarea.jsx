import React from 'react';

const Textarea = ({ id, name, placeholder, value, onChange, required = false, rows = 4, className = '' }) => {
  const baseStyle = 'w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand dark:focus:ring-brand-light focus:border-transparent transition-all duration-300 resize-vertical';

  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className={`${baseStyle} ${className}`}
    ></textarea>
  );
};

export default Textarea;
