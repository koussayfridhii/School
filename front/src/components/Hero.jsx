import React from 'react';

const Hero = ({ title, subtitle, backgroundImage }) => {
  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <div
      className="bg-primary-light dark:bg-primary-dark text-white p-12 text-center bg-cover bg-center"
      style={style}
    >
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-xl">{subtitle}</p>
    </div>
  );
};

export default Hero;
