import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import * as S from './styles';
import LogoHtml from '../../Assets/html.svg';
import LogoCss from '../../Assets/css.svg';
import LogoJS from '../../Assets/js.svg';
import LogoReact from '../../Assets/react.svg';
import LogoSass from '../../Assets/sass.svg';
import LogoBootstrap from '../../Assets/bootstrap.svg';
import LogoGithub from '../../Assets/github.svg';
import LogoGit from '../../Assets/git.svg';
import LogoFigma from '../../Assets/figma.svg';
import LogoAdobeXD from '../../Assets/adobexd.svg';
import LogoPhotoshop from '../../Assets/photoshop.svg';
import Logoillustrator from '../../Assets/illustrator.svg';

const Skills = () => {
  return (
    <Container>
      <S.SkillsWrapper>
        <h1>
          Minhas <span>Habilidades</span>
        </h1>
        <S.SkillStyle>
          <div>
            <img src={LogoHtml} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoCss} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoJS} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoReact} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoSass} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoBootstrap} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoGithub} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoGit} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoFigma} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoAdobeXD} alt="logo HTML" />
          </div>
          <div>
            <img src={LogoPhotoshop} alt="logo HTML" />
          </div>
          <div>
            <img src={Logoillustrator} alt="logo HTML" />
          </div>
        </S.SkillStyle>
      </S.SkillsWrapper>
    </Container>
  );
};

export default Skills;
