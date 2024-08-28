import React from 'react';
import style from "./Torqlite.module.css"

import Logo from "../../../assets/torq.jpg"
import suxl from "../../../assets/suxl.jpg"
import iuxl from "../../../assets/iuxl.jpg"
import rt from "../../../assets/rt.jpg"
import multi from "../../../assets/multi.jpg"
import jn from "../../../assets/jn.jpg"
import pc from "../../../assets/pc.jpg"
import bkey from "../../../assets/bkey.jpg"
import split from "../../../assets/split.jpg"
import tens from "../../../assets/tens.jpg"
import certf from "../../../assets/certf.jpg"

import ProductList from "../ProductList/ProductList"


const Torqlite = (props) => {
  const products = [
    { name: "IU-XL Series", img: suxl, link: "https://www.torqlite.com/products/iu-xl-series/", desc: "Design patenteado ultra fino para aplicação em espaços restritos. Possibilidade de troca de links. Corpo em liga TL-T6 duravel, ultra leve e de alta resistência utilizada em engenharia aero-espacial." },
    { name: "SU-XL Series", img: iuxl, link: "https://www.torqlite.com/products/su-xl-series/", desc: "As ferramentas de catraca e pino quadrado passaram por longos testes de qualidade e força, ao longo do tempo, e oferecem uma eficiente opção custo-benefício para necessidades de amplo range de torque." },
    { name: "RT Series", img: rt, link: "https://www.torqlite.com/products/rt-series-2/", desc: "A série pneumática Torqlite fornece velocidade e torque em uma única ferramenta." },
    { name: "Multipliers", img: multi, link: "https://www.torqlite.com/products/multipliers/", desc: "Essas ferramentas foram projetadas para satisfazer as necessidades do mercado de rodas de veículos comerciais. A base de reação integrada é projetada especificamente para atingir os parafusos de roda embutidos. Confira aqui todas as séries." },
    { name: "JN Series", img: jn, link: "https://www.torqlite.com/products/jn-series-2/", desc: "A ferramenta hidráulica patenteada da Série JN foi projetada especificamente para apertar ou afrouxar parafusos de forma rápida, segura e precisa em aplicações de Top Drive e Compressores de Gás." },
    { name: "Power Consoles", img: pc, link: "https://www.torqlite.com/products/pumps/", desc: "Estas bombas têm sido continuamente aprimoradas ao longo dos últimos 40 anos e algumas das bombas originais ainda estão em serviço. Equipadas com um motor universal monofásico de 1⅛ hp, oferecem uma incrível relação peso-desempenho." },
    { name: "Chave de Backup", img: bkey, link: "https://www.torqlite.com/", desc: "Possui válvula de alívio e permite fácil troca de link." },
    { name: "Cortador de Porca", img: split, link: "https://www.torqlite.com/", desc: "Ferramentas para rápida e fácil remoção de porcas corroidas. Opera com uma unidade hidráulica compacta." },
    { name: "Tensionador", img: tens, link: "https://www.torqlite.com/products/tensioners-2/", desc: "Os Tensionadores TorqLite são ideais para um rápido, preciso e confiável tensionamento dos parafusos de flanges. Em diferentes modelos específicos por tipo de aplicação, atendem diversos segmentos industriais incluindo óleo e gás, petroquímico, offshore e outros." }
  ];


  return (
    <div className={style.Content}>
      <div><img src={Logo} alt="Logo"/></div>
      <p>
        A Torq/Lite é uma das maiores fabricantes mundiais de Ferramentas
        Hidráulicas de Torque.
      </p>
      <p>
        Há mais de 40 anos no mercado e com diversas patentes premiadas,
        é também a maior empresa Prestadora de Serviços de Torque nos EUA.
      </p>
      <p>
        Todo esse conhecimento em campo é transformado em tecnologia para
        solucionar os diversos problemas de torqueamento no mercado industrial.
      </p>
      <ProductList products={products}/>
      <h4>Nossos Certificados</h4>
      <div className={style.cert}><img src={certf} alt="certificado"/></div>
    </div>
  )
}


export default Torqlite;