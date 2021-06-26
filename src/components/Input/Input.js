import React from 'react';

export const Input = ({ type, name, placeholder, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  )
}