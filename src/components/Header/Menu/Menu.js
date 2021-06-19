import React, { useState } from 'react';
import { Hamburguer, MenuStyle } from './styles';
import { Link } from 'react-scroll';

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
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={() => setMenuMobile(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={() => setMenuMobile(false)}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={() => setMenuMobile(false)}
          >
            Habilidades
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="portifolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={() => setMenuMobile(false)}
          >
            Portifólio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            onClick={() => setMenuMobile(false)}
          >
            Contato
          </Link>
        </li>
      </MenuStyle>
    </>
  );
};

export default Menu;
