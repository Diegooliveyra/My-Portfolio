import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import Menu from './Menu/Menu';
import { HeaderStyled } from './style';

const Header = ({ theme, setTheme }) => {
  function handleChangeTheme() {
    theme.mode === 'dark'
      ? setTheme({ mode: 'light' })
      : setTheme({ mode: 'dark' });
  }
  return (
    <Container>
      <HeaderStyled>
        <nav>
          <button onClick={handleChangeTheme}>Change Theme</button>
          <Menu theme={theme} setTheme={setTheme} />
        </nav>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
