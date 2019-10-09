import React from 'react';
import style from "./NavigationItems.module.css"

import NavigationItem from "./NavigationItem/NavigationItem"


const NavigationItems = (props) => (
  <ul className={style.NavigationItems}>
    <NavigationItem exact link="/">Empresa</NavigationItem>
    <NavigationItem link="/atuacao">Atuação</NavigationItem>
    <NavigationItem link="/produtos">Produtos</NavigationItem>
    <NavigationItem link="/contato">Contato</NavigationItem>
  </ul>
);

export default NavigationItems;