import React from 'react';
import * as S from './style';
import { Container } from '../../styles/GlobalStyles';
import photo from '../../Assets/photo.png';
import Button from '../Button/Button';

const About = () => {
  return (
    <Container>
      <S.AboutWrapper>
        <S.AboutInfo>
          <h1 id={About}>
            Sobre <span>Min</span>
          </h1>
          <h2>Desenvolvedor Front-End</h2>
          <p>
            Olá me chamo Diego, tenho 32 anos de Idade sou Bacharel em Sistemas
            de Informação Graduado pela Universidade Estadual de Goiás, e desejo
            evoluir cada vez mais meus conhecimentos e continuar sempre
            trabalhando nesta área que eu amo tanto que é o desenvolvimento Web.
          </p>
          <p>
            Além da Graduação atuei em cargos que obtive um boa bagagem teórica
            e prática tendo sempre muita disposição de aprender e evoluir na
            área da tecnologia da informação
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
