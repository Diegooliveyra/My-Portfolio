import React from 'react';
import * as S from './style';
import { Container } from '../../styles/GlobalStyles';
import photo from '../../Assets/photo.png';
import Button from '../Button/Button';

const About = () => {
  return (
    <Container>
      <S.AboutWrapper id="about" data-aos="fade-right">
        <S.AboutInfo>
          <h1>
            Sobre <span>Min</span>
          </h1>
          <h2>Desenvolvedor Front-End</h2>
          <p>
            Olá me chamo Diego, tenho 32 anos de Idade, sou formado em Marketing
            pela Universidade Braz Cubas e atualmente me graduando em Analise e
            Desenvolvimento de Sistemas pela Universidade de Maringá. Tenho experiência
            de mais de 6 anos como Designer freelancer, atendendo agências, clientes 
            finais e parcerias com outros designers.
          </p>
          <p>
            Por 3 anos atuo como analista de marketing na Instel Tecnologia, onde sou
            responsável pela criação e desenvolvimento de toda a identidade visual da
            empresa, tal como tambem o website. Nos últimos anos venho estudando e me
            especializando como desenvolvedor Front-End, através de plataformas como 
            a Origamid, Rocketseat e Udemy.
          </p>
          <Button>Download CV</Button>
        </S.AboutInfo>
        <S.AboutPhoto>
          <img src={photo} alt="" />
        </S.AboutPhoto>
      </S.AboutWrapper>
    </Container>
  );
};

export default About;
