import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import * as S from './styles';
import { ReactComponent as SkillsLogo } from '../../Assets/skills_logos.svg';
import { ReactComponent as TimeLine } from '../../Assets/time_line.svg';

const Skills = ({ theme, setTheme }) => {
  return (
    <Container>
      <S.SkillsWrapper theme={theme} setTheme={setTheme}>
        <h1>
          Minhas <span>Habilidades</span>
        </h1>
        <div>
          <TimeLine />
          <SkillsLogo />
        </div>
      </S.SkillsWrapper>
    </Container>
  );
};

export default Skills;
