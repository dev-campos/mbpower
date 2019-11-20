import React from 'react';
import style from "./Contact.module.css"

import MailForm from "./MailForm/MailForm"
import Information from "./Information/Information"

const Contact = (props) => (
  <div className={style.Contact}>
    <MailForm/>
    <Information/>
  </div>
);

export default Contact;