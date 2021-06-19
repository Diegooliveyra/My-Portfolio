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
    font-size: 1rem;
    outline: none;
    color: var(--dark-color);
  }
`;
