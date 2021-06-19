import styled from 'styled-components';

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  label {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.8rem 1rem;
    border: 1px solid
      ${(props) => (props.theme.mode === 'dark' ? '#EEE' : '#aaa')};
    font-size: 1rem;
    outline: none;
    color: var(--dark-color);
    border-radius: 2px;

    :focus,
    :hover {
      outline: none;
      border-color: white;
      background-color: #fff;
      box-shadow: 0 0 0 1px #d65063;
    }
  }
`;
