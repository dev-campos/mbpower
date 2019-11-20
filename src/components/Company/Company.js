import React from 'react';
import style from "./Company.module.css"
import { Link } from "react-router-dom"

import logo from "../../assets/Favi.ico"
import torq from "../../assets/torq.jpg"
import eq from "../../assets/equalizer.jpg"
import Carousel from "../Carousel/Carousel"

const Company = (props) => (
  <div className={style.Content}>
    <div className={style.Logo}>
      <img src={logo} alt="Mb Power Logo"/>
    </div>
    <div className={style.Carousel}>
      <Carousel />
    </div>
    <p>
      A MB Power surgiu com a finalidade de expandir no Brasil as marcas
      Torqlite e Equalizer, lideres em seus segmentos.
    </p>
    <p>
      Buscando atender a exigente demanda do mercado, fornecemos soluções para
      torque e manutenção de flanges através de produtos e serviços de geração
      de performance operacional, aliando nosso know how a produtos de alta
      qualidade , design, garantia e facilidade de manutenção.
    </p>
    <p>
      Estamos presentes em todo o Brasil.
    </p>

    <div>
      <Link to="/produtos/torqlite"><img src={torq} alt="Torqlite Logo"/></Link>
      <Link to="/produtos/equalizer"><img  className={style.Eq} src={eq} alt="Equalizer Logo"/></Link>
    </div>
  </div>
);

export default Company;