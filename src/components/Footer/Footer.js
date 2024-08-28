import React from 'react';
import style from "./Footer.module.css"

const Footer = (props) => (
  <footer className={style.Footer}>
    <p>Mb Power @{new Date().getFullYear()} Todos os direitos reservados</p>
  </footer>
);

export default Footer;