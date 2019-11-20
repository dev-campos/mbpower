import React from 'react';
import style from "./NavigationDropdown.module.css"
import { NavLink } from "react-router-dom"

const NavigationDropdown = (props) => {
  const suppliers = [
    { name: "Torqlite", link: "torqlite" },
    { name: "Equalizer", link: "equalizer" }
  ];

  const supplierList = suppliers.map((supplier, index) => {
    return (
      <NavLink
        key={supplier.name}
        exact={ props.exact }
        activeClassName={ style.active }
        to={ "/produtos/" + supplier.link }>
        {supplier.name}
      </NavLink>
    )
  });

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <li className={style.NavDropdown}>
      <NavLink
        onClick={handleClick}
        exact={ props.exact }
        activeClassName={ style.active }
        to={ props.link }>{ props.children }
      </NavLink>
      <div className={style.DropContent}>
        {supplierList}
      </div>
  </li>
  )
};

export default NavigationDropdown;