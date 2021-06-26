import React from 'react';

export const Button = ({ txt, type, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {txt}
    </button>
  )
}