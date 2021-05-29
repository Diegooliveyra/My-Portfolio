import React from 'react';

import * as S from './style';
import { ReactComponent as Logo } from '../../Assets/logo.svg';

const Hero = () => {
  return (
    <S.HeroStyled>
      <Logo />
      <h3>Desenvolvedor Front-End</h3>
      <S.ArrowMove>
        <span></span>
        <span></span>
        <span></span>
      </S.ArrowMove>
    </S.HeroStyled>
  );
};

export default Hero;
