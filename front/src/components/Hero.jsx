import React from 'react';

const Hero = ({ title, subtitle, backgroundImage }) => {
  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <div
      className="bg-primary text-white p-20 text-center bg-cover bg-center"
      style={style}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl md:text-2xl">{subtitle}</p>
    </div>
  );
};

export default Hero;
