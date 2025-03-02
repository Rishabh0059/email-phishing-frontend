import React from 'react';

const Button = ({ className = '', onClick, children }) => {
  return (
    <button
      className={`py-2 px-4 rounded-md font-semibold transition duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
