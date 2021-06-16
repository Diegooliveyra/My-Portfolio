import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import * as S from './styles';
import image_portifolio_1 from '../../Assets/portifolio_img_1.png';
import image_portifolio_2 from '../../Assets/portifolio_img_2.png';
import image_portifolio_3 from '../../Assets/portifolio_img_3.png';
import image_portifolio_4 from '../../Assets/portifolio_img_4.png';
import { ReactComponent as LogoGithub } from '../../Assets/github.svg';

const Portifolio = ({ theme, setTheme }) => {
  return (
    <Container>
      <S.PortifolioWrapper theme={theme} setTheme={setTheme}>
        <h1>
          Meu <span>Portifólio</span>
        </h1>
        <S.PortifolioCards>
          <S.PortifolioCard>
            <img
              src={image_portifolio_1}
              alt="imagem do projeto Github Search"
            />

            <div>
              <h2>Github Search</h2>
              <p>
                Projeto desenvolvido em Javascript puro para consumir a API do
                Github. Basta digitar um usuário do Github e a aplicação irá
                retornar dados do perfil procurado.
              </p>
              <a href="https://github.com/Diegooliveyra/Github-Search">
                <LogoGithub />
              </a>
            </div>
          </S.PortifolioCard>
          <S.PortifolioCard>
            <img src={image_portifolio_2} alt="imagem do projeto Ocean" />

            <div>
              <h2>Ocean Road to Dev</h2>
              <p>
                Projeto desenvolvido em Html, Css eJavascript, o projeto foi
                desenvolvido durante o Desafio Road to Dev Jr.
              </p>
              <a href="https://github.com/Diegooliveyra/Ocean-Road-to-Dev">
                <LogoGithub />
              </a>
            </div>
          </S.PortifolioCard>
          <S.PortifolioCard>
            <img src={image_portifolio_3} alt="imagem do projeto DogFlix" />

            <div>
              <h2>DogFlix</h2>
              <p>
                Criação do DogFlix, app web utilizando React na semana da
                #ImersãoReact da Alura.
              </p>
              <a href="https://github.com/Diegooliveyra/dogflix-Imersao-Alura">
                <LogoGithub />
              </a>
            </div>
          </S.PortifolioCard>
          <S.PortifolioCard>
            <img src={image_portifolio_4} alt="Imagem do projeto Dogs" />

            <div>
              <h2>Dogs</h2>
              <p>
                🐶 Rede social feita para cachorros inspirada no Instagram.
                Feita com React.js
              </p>
              <a href="https://github.com/Diegooliveyra/Dogs">
                <LogoGithub />
              </a>
            </div>
          </S.PortifolioCard>
        </S.PortifolioCards>
      </S.PortifolioWrapper>
    </Container>
  );
};

export default Portifolio;
