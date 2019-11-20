import React from 'react';
import style from "./Information.module.css"

const Information = (props) => (
  <div className={style.Information}>
    <div>
      <h2>ENDEREÇO:</h2>
      <p>Rua XV de Novembro</p>
      <p>Nº 106/ sala 1401</p>
      <p>Centro-Niterói-RJ</p>
      <p>CEP: 24.020-125</p>
    </div>
    <div>
      <h2>TELEFONE</h2>
      <p>(21)3629-0046</p>
      <p>(21) 97130-5611 (Vivo)</p>
      <p>(21) 99248-3529</p>
    </div>
    <div>
      <h2>E-MAIL</h2>
      <p>contato@mbpower.com.br</p>
    </div>
  </div>
);

export default Information;