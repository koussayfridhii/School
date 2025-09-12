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
      className={`w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white ${className}`}
    />
  );
};

export default Textarea;
