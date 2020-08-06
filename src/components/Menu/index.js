import React from 'react';
import Logo from '../../assets/img/2.png';
import './menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Animaflix logo">
        </img>
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Vídeo Novo
        </Button>
    </nav>
  );
}

export default Menu;