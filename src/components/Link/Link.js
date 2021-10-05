import React from 'react';

export const Link = ({ href, target, rel, children }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}