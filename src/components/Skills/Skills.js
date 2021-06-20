import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import * as S from './styles';
import { ReactComponent as SkillsLogo } from '../../Assets/skills_logos.svg';

const Skills = ({ theme, setTheme }) => {
  return (
    <Container>
      <S.SkillsWrapper
        theme={theme}
        setTheme={setTheme}
        id="skill"
        data-aos="fade-right"
      >
        <S.SkillInfo>
          <h1>
            Minhas <span>Habilidades</span>
          </h1>

          <p>
            Formado em Marketing pela Universidade Braz Cubas e graduando em
            Analise e Desenvolvimentio de Sistemas pela Unicesumar. Tenho
            experiência de mais de 6 anos como Designer freelancer, atendendo
            agências, clientes finais e parcerias com outros designers.
          </p>
          <p>
            Por 3 anos atuo como analista de marketing na Instel Tecnologia,
            onde sou responsável pela criação e desenvolvimento de toda a
            identidate visual da empresa, tal como tambem o website. Nos ultimos
            anos venho estudando e me especializando como desenvolvedor
            Front-End, através de plataformas como a Origamid, Rocketseat e
            Udemy.
          </p>
        </S.SkillInfo>

        <S.SkillLogo>
          <SkillsLogo />
        </S.SkillLogo>
      </S.SkillsWrapper>
    </Container>
  );
};

export default Skills;
