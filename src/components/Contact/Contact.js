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
  const handleSubmit = (event) => {
    alert('Enviado com Sucesso');
  };

  return (
    <Container>
      <S.ContactWrapper id="contact" data-aos="fade-right">
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
              <a
                href="https://github.com/Diegooliveyra"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                diegooliveyra
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/diego-de-oliveira-brito/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon />
                in/diego-de-oliveira-brito
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5511954830893"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                11 95483-0893
              </a>
            </li>
            <li>
              <a
                href="mailto:diegooliveirabryto@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon />
                diegooliveirabryto@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/xrGrjjkxZFx6jXm59"
                target="_blank"
                rel="noreferrer"
              >
                <LocationIcon />
                Mogi das Cruzes - SP
              </a>
            </li>
          </S.ListContact>
        </S.ContactInfo>

        <S.ContactForm onSubmit={handleSubmit}>
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
