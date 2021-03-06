import React from 'react';
import * as S from './style';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { ReactComponent as GithubIcon } from '../../Assets/github.svg';
import { ReactComponent as LinkedinIcon } from '../../Assets/linkedin.svg';
import { ReactComponent as WhatsAppIcon } from '../../Assets/whatsapp.svg';
import { ReactComponent as EmailIcon } from '../../Assets/email.svg';

const Hero = () => {
  return (
    <S.HeroStyled id="home">
      <Logo data-aos="fade-up" />
      <h3 data-aos="fade-up">Desenvolvedor Front-End</h3>
      <S.ArrowMove>
        <span></span>
        <span></span>
        <span></span>
      </S.ArrowMove>
      <S.IconsLinks>
        <a
          href="https://github.com/Diegooliveyra"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/diego-de-oliveira-brito/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511954830893"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
        </a>
        <a
          href="mailto:diegooliveirabryto@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon />
        </a>
      </S.IconsLinks>
    </S.HeroStyled>
  );
};

export default Hero;
