import React from 'react';
import style from "./Equalizer.module.css"

import Logo from "../../../assets/equalizer.jpg"
import alinha from "../../../assets/alinhador.jpg"
import afasta from "../../../assets/afastador.jpg"
import puxa from "../../../assets/puxador.jpg"
import eleva from "../../../assets/elevador.jpg"
import bomba from "../../../assets/bombas.jpg"

import ProductList from "../ProductList/ProductList"

const Equalizer = (props) => {
  const products = [
    { name: "Alinhador de Flange", img: alinha, link: "https://www.equalizerinternational.com/products/filter/flange-alignment-1/flange-alignment", desc: "A gama Equalizer ™ de ferramentas patenteadas de alinhamento, podem ser utilizadas para alinhar ou realinhar flanges e juntas durante a construção, instalação, substituição ou durante a manutenção." },
    { name: "Afastador de Flange", img: afasta, link: "https://www.equalizerinternational.com/products/filter/flange-spreading/spreading-wedges", desc: "A gama de ferramentas patenteadas Equalizer ™ para separação de flanges têm sido desenvolvida para auxiliar no trabalho com todos os tipos de flanges, inclusive aqueles com nenhuma abertura de acesso entre eles." },
    { name: "Puxador de Flange", img: puxa, link: "https://www.equalizerinternational.com/products/filter/flange-pulling", desc: "A ferramenta Equalizer ™ para fechamento de flange foi desenvolvida para puxar flanges em paralelo. Recomendado para instalação de tubulações, manutenção de rotina, parada de manutenção e interrupções." },
    { name: "Elevador de Carga", img: eleva, link: "https://www.equalizerinternational.com/", desc: "A gama Equalizer ™ VLW18TE (hidráulico) e VLW18TI (mecânico) de elevação vertical de cargas, têm sido desenvolvidas para auxiliar no levantamento de equipamentos pesados quando o acesso é restrito." },
    { name: "Bombas Hidráulicas", img: bomba, link: "https://www.equalizerinternational.com/products/filter/hydraulic-pumps/single-port-pumps", desc: "A gama Equalizer de bombas manuais hidráulicas foram concebidas com um reservatório de óleo selado, permitindo que elas sejam utilizadas em qualquer orientação, sem o riscos de vazamento ou ao ambiente." }
  ];

  return (
    <div className={style.Content}>
      <div><img src={Logo} alt="Logo"/></div>
      <p>
        Líder mundial.
      </p>
      <p>
        Nasceu na Escócia há mais de 20 anos, destacando-se pela fabricação de ferramentas de alta qualidade para manutenção de flanges.
      </p>
      <p>
        Ideais para os setores de petróleo e gás, petroquímica nuclear, água , mineração e energias renováveis
      </p>
      <ProductList products={products}/>
    </div>
  );
}

export default Equalizer;