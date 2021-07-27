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
            landing pages e aplicativos. Tenho bom conhecimento em Html5, CSS
            e Javascript, tambem trabalho com Bootstrap, jquery, Sass e Styled
            Components. Tenho conhecimento em React e Vue, atualmente venho 
            estudando Typescript e Redux.
          </p>
          <p>
           Nas criações de protótipos, atualmente utilizo o Figma, porém já 
           trabalhei com outros softwares de prototipagem, tal como Adobe 
           Photoshop, Adobe XD, entre outros.
           Quer conhecer um pouco mais sobre o meu trabalho, então confere 
           abaixo o meu portfólio. E se gostar, pode me chamar para um café :)

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
