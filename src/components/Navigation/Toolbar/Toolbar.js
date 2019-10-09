import React from "react";
import style from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems"

const Navbar = props => (
  <header className={style.Toolbar}>
    <nav><NavigationItems /></nav>
  </header>
);

export default Navbar;