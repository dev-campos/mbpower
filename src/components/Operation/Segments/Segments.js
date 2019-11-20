import React from 'react';
import style from "./Segments.module.css"

import plat from "../../../assets/plat.jpg"
import mm from "../../../assets/mm.jpg"
import naval from "../../../assets/naval.jpg"
import mineracao from "../../../assets/mineracao.jpg"
import usina from "../../../assets/usina.jpg"
import refinaria from "../../../assets/refinaria.jpg"
import eolica from "../../../assets/eolica.jpg"
import auto from "../../../assets/auto.jpg"

const Segments = (props) => {
  const segments = [
    { name: "Óleo e Gás", image: plat },
    { name: "Metalmecânica", image: mm },
    { name: "Construção Naval", image: naval },
    { name: "Mineração", image: mineracao },
    { name: "Usinas", image: usina },
    { name: "Refinarias", image: refinaria },
    { name: "Energia eólica", image: eolica },
    { name: "Automotiva", image: auto }
  ];

  const segmentsList = segments.map((segment, index) => {
    return (
      <li key={index}>
        <img src={segment.image} alt=""/>
        <p>{segment.name}</p>
      </li>
    )
  })

  return <ul className={style.Segments}>{segmentsList}</ul>
};

export default Segments;