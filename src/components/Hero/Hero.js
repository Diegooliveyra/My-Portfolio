import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { HeroStyled } from './style';
import { ReactComponent as Logo } from '../../Assets/logo.svg';

const Hero = () => {
  return (
    <HeroStyled>
      <Logo />
      <h1>Desenvolvedor Front-End</h1>
    </HeroStyled>
  );
};

export default Hero;
