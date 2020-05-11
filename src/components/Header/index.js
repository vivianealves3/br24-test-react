import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import icon from '../../assets/icon.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Bitrix" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <img src={icon} alt="Vivi" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
