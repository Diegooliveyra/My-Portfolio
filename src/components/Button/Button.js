import React from 'react';
import { ButtonStyle } from './style';

const Button = ({ children }) => {
  return (
    <>
      <ButtonStyle>{children}</ButtonStyle>
    </>
  );
};

export default Button;
