import React from 'react';

const Unauthorized = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-red-500">Unauthorized</h1>
      <p>You do not have permission to view this page.</p>
    </div>
  );
};

export default Unauthorized;
