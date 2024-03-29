import React from 'react';

export const Button = ({ text, func }) => {
  return <button onClick={func}>Click {text}</button>;
};
