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
            Atuo principalmente criando e desenvolvendo layouts para sites,
            landing pages e aplicativos como UI/UX Designer e codificando como
            Frontend. Atualmente tenho bastante conhecimento em Html5, CSS e
            Javascript, para estilização, além do CSS, tambem trabalho com
            Bootstrap, Sass e Styled Components. Tenho um bom conhecimento em
            React, atualmente venho estudando Typescript e Redux.
          </p>
          <p>
            Para criação de protótipos, atualmente utilizo o Figma, porém já
            trabalhei com Adobe Photoshop, Adobe XD, e outros softwares de
            vetor. Quer conhecer um pouco mais sobre o meu trabalho, então
            confere abaixo o meu portfólio. E se gostar, pode me chamar para um
            café.
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
