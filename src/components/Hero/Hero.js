import React from 'react';

import { HeroStyled } from './style';
import { ReactComponent as Logo } from '../../Assets/logo.svg';

const Hero = () => {
  return (
    <HeroStyled>
      <Logo />
      <h3>Desenvolvedor Front-End</h3>
    </HeroStyled>
  );
};

export default Hero;
