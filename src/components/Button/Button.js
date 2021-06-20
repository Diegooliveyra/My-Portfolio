import React from 'react';
import { ButtonStyle } from './style';

const Button = ({ children, type }) => {
  return (
    <>
      <ButtonStyle type={type}>{children}</ButtonStyle>
    </>
  );
};

export default Button;
