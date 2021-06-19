import React from 'react';
import * as S from './styles';
import { Container } from '../../styles/GlobalStyles';
import Input from '../input/Input';
import Button from '../Button/Button';
import { ReactComponent as GithubIcon } from '../../Assets/github.svg';
import { ReactComponent as LinkedinIcon } from '../../Assets/linkedin.svg';
import { ReactComponent as WhatsAppIcon } from '../../Assets/whatsapp.svg';
import { ReactComponent as EmailIcon } from '../../Assets/email.svg';
import { ReactComponent as LocationIcon } from '../../Assets/location.svg';

const Contact = () => {
  return (
    <Container>
      <S.ContactWrapper id="contact" data-aos="fade-left">
        <S.ContactInfo>
          <h1>
            Meu <span>Contato</span>
          </h1>

          <h2>E aí, vamos conversar?</h2>
          <p>
            Você pode me seguir nas redes sociais ou envie um e-mail, terei o
            maior prazer em conversar com você.
          </p>
          <S.ListContact>
            <li>
              <GithubIcon />
              diegooliveyra
            </li>
            <li>
              <LinkedinIcon />
              in/diego-de-oliveira-brito
            </li>
            <li>
              <WhatsAppIcon />
              11 95234-1234
            </li>
            <li>
              <EmailIcon />
              diegooliveirabryto@gmail.com
            </li>
            <li>
              <LocationIcon />
              Mogi das Cruzes - SP
            </li>
          </S.ListContact>
        </S.ContactInfo>

        <S.ContactForm>
          <Input label="Seu nome (obrigatório)" type="text" name="nome" />

          <Input label="Seu e-mail (obrigatório)" type="email" name="email" />
          <S.TextArea>
            <label htmlFor="mensagem">Sua mensagem</label>
            <textarea id="mensagem"></textarea>
          </S.TextArea>

          <Button type="submit">Enviar</Button>
        </S.ContactForm>
      </S.ContactWrapper>
    </Container>
  );
};

export default Contact;
