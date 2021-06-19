import React from 'react';
import { InputStyle } from './styles';

const Input = ({ label, type, name, ...props }) => {
  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} {...props} />
    </InputStyle>
  );
};

export default Input;
