import React from "react";
import style from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems"

import Icon from "../../../assets/Icon.png"

const Navbar = props => (
  <header className={style.Toolbar}>
    <img className={style.Icon} src={Icon} alt="Mb Power Icon"/>
    <nav><NavigationItems /></nav>
  </header>
);

export default Navbar;