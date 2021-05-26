import React, { useState } from 'react';
import { Hamburguer, MenuStyle } from './styles';

const Menu = ({ theme, setTheme }) => {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <>
      <Hamburguer
        menuMobile={menuMobile}
        onClick={() => setMenuMobile(!menuMobile)}
        theme={theme}
        setTheme={setTheme}
      >
        <div />
        <div />
        <div />
      </Hamburguer>

      <MenuStyle menuMobile={menuMobile}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Sobre</a>
        </li>
        <li>
          <a href="/">Habilidades</a>
        </li>
        <li>
          <a href="/">Portifólio</a>
        </li>
        <li>
          <a href="/">Contato</a>
        </li>
      </MenuStyle>
    </>
  );
};

export default Menu;
