import React from 'react';
import Logo from './Logo';
import { HeaderContainer, HeaderTitle } from '../App.styles';

const Header = () => (
  <HeaderContainer>
    <Logo width={80} height={80} color="#2b62e3" />
    <HeaderTitle>
      <div>Desafio Salutho</div>
      <div>Calculadora de MMC</div>
    </HeaderTitle>
  </HeaderContainer>
);

export default Header;
