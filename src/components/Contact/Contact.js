import React from 'react';
import style from "./Contact.module.css"

import MailForm from "./MailForm/MailForm"
import Information from "./Information/Information"

const Contact = (props) => (
  <div>
    <div className={style.Contact}>
      <MailForm/>
      <Information/>
    </div>
    <div className={style.Terms}>
      <h2>Cancelamentos , Devoluções ou Troca de Pedidos não serão aceitos</h2>
    </div>
  </div>

);

export default Contact;