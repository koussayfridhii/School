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
      className={`w-full px-3 py-2 border border-color-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background placeholder-color-muted text-color-default ${className}`}
    />
  );
};

export default Textarea;
