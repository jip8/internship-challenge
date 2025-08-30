// Footer.tsx
import React from 'react';
import { FooterContainer, IconWrapper, FooterText } from "../App.styles";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Desenvolvido por <strong>Pedro Lucas Martins da Silva</strong>
      </FooterText>

      <IconWrapper>
        <a href="https://www.linkedin.com/in/pedro-lm-silva/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:pedro.lm.silva@hotmail.com">
          <FaEnvelope />
        </a>
      </IconWrapper>
    </FooterContainer>
  );
};

export default Footer;
