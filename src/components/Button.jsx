import React from 'react';

const Button = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative inline-block px-6 py-2 font-mono text-white rounded-lg hover:bg-purple-700 transition-all"
    >
      <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500"></span>
      <span className="absolute inset-0 w-full h-full bg-black rounded-lg clip-path-custom"></span>
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default Button;
