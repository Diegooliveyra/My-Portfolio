import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import Menu from './Menu/Menu';
import { HeaderStyled, ButtonStyle } from './style';
import { ReactComponent as SunIcon } from '../../Assets/sun.svg';
import { ReactComponent as MoonIcon } from '../../Assets/moon.svg';

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
          <ButtonStyle onClick={handleChangeTheme}>
            {theme.mode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </ButtonStyle>
          <Menu theme={theme} setTheme={setTheme} />
        </nav>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
