import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>


      <p>
        Desenvolvido por Camila Coutinho durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
          </a>
      </p>
      <a>
        <img src="../assets/img/git.svg" alt="git" />
      </a >
      <a>
        <img src="../assets/img/linkedin.svg" alt="linkedin" />
      </a>

      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>


    </FooterBase >
  );
}

export default Footer;
