import React from 'react';
import * as S from './styles';
import { Container } from '../../styles/GlobalStyles';

const Contact = () => {
  return (
    <Container>
      <S.ContactWrapper>
        <S.ContactInfo>
          <h1>
            Meu <span>Contato</span>
          </h1>

          <h2>E aí, vamos conversar?</h2>
          <p>
            Você pode me seguir nas redes sociais ou envie um e-mail, terei o
            maior prazer em conversar com você.
          </p>
          <ul>
            <li>diegooliveyra</li>
            <li>in/diego-de-oliveira-brito</li>
            <li>11 95234-1234</li>
            <li>diegooliveirabryto@gmail.com</li>
            <li>Mogi das Cruzes - SP</li>
          </ul>
        </S.ContactInfo>

        <S.ContactForm>formulario</S.ContactForm>
      </S.ContactWrapper>
    </Container>
  );
};

export default Contact;
