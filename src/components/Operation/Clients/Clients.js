import React from 'react';
import style from "./Clients.module.css"

const Clients = (props) => {
  const clients = [
    "Seadrill",
    "Industrial Air Tool",
    "Schahin",
    "Odebrecht",
    "Diamond Offshore",
    "Constellation",
    "Eletronuclear",
    "Arauco",
    "Technip"
  ];

  const clientList = clients.map((client, index) => {
    return <li key={index}>{client}</li>
  })

  return <ul className={style.Clients}>{clientList}</ul>
}

export default Clients;