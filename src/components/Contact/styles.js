import styled from 'styled-components';

export const ContactWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  flex-wrap: wrap;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 4rem 0;
    padding: 4rem 0;
  }
  @media (min-height: 1200px) {
    min-height: 50vh;
  }
`;

export const ContactInfo = styled.div`
  max-width: 620px;
  flex: 1 1 300px;

  h2 {
    margin: 2rem 0;
  }

  p {
    max-width: 450px;
    line-height: 1.4;
  }
`;

export const ListContact = styled.ul`
  margin: 2rem 0;

  li a {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-right: 1rem;
  }

  svg path {
    fill: ${(props) => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
  }
`;

export const ContactForm = styled.form`
  max-width: 620px;
  flex: 1 1 300px;

  @media (max-width: 768px) {
    width: 100%;
  }

  button {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }

  textarea {
    outline: none;
    height: 6rem;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    color: var(--dark-color);
    resize: none;
    border: 1px solid
      ${(props) => (props.theme.mode === 'dark' ? '#EEE' : '#aaa')};
    :focus,
    :hover {
      outline: none;
      border-color: white;
      background-color: #fff;
      box-shadow: 0 0 0 1px #d65063;
    }
  }
`;
