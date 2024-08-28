import React from 'react';
import style from "./NavigationItems.module.css"

import NavigationItem from "./NavigationItem/NavigationItem"
import NavigationDropdown from "./NavigationDropdown/NavigationDropdown"




const NavigationItems = (props) => (
  <ul className={style.NavigationItems}>
    <NavigationItem exact link="/">Empresa</NavigationItem>
    <NavigationItem link="/atuacao">Atuação</NavigationItem>
    <NavigationDropdown link="/produtos">Produtos</NavigationDropdown>
    <NavigationItem link="/contato">Contato e Termos</NavigationItem>
  </ul>
);

export default NavigationItems;