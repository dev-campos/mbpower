import React, { useState } from "react";
import style from "./MailForm.module.css"


const MailForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event, type) => {
    const value = event.target.value
    switch (type) {
      case "name":
        setName(value)
        break;
      case "phone":
        setPhone(value)
        break;
      case "mail":
        setMail(value)
        break;
      case "city":
        setCity(value)
        break;
      case "state":
        setState(value)
        break;
      case "subject":
        setSubject(value)
        break;
      case "message":
        setMessage(value)
        break;
      default:
        return
    }
  }

  const handleSelect = (event) => {
    setState(event.target.value)
  }

  const handleClean = (event) => {
    event.preventDefault()
    setName("")
    setPhone("")
    setMail("")
    setCity("")
    setState("")
    setSubject("")
    setMessage("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if ((name === "" || name === "Nome deve ser preenchido") && (mail === "" || mail === "Email deve ser preenchido")) {
      setName("Nome deve ser preenchido")
      setMail("Email deve ser preenchido")
    } else if (name === "" || name === "Nome deve ser preenchido") {
      setName("Nome deve ser preenchido")
    } else if (mail === "" || mail === "Email deve ser preenchido") {
      setMail("Email deve ser preenchido")
    } else {
      const templateId = "template_iL48gRAs"
      const variables = {
        message_html: message,
        from_name: name,
        reply_to: mail,
        city: city,
        state: state,
        phone: phone
      };

      sendFeedback(templateId, variables)
    }
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send("gmail", templateId, variables)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className={style.Form}>
      <form>
        <div className={style.Input}>
          <label htmlFor="name">*Nome</label>
          <input id="name" required type="text" value={name} onChange={(event) => handleChange(event, "name")}/>
        </div>
        <div className={style.Input}>
          <label htmlFor="phone">Telefone</label>
          <input id="phone" type="text" value={phone} onChange={(event) => handleChange(event, "phone")}/>
        </div>
        <div className={style.Input}>
          <label htmlFor="mail">*Email</label>
          <input id="mail" required type="email" value={mail} onChange={(event) => handleChange(event, "mail")}/>
        </div>
        <div className={style.Locale}>
          <div className={style.City}>
            <label className={style.CityLabel} htmlFor="city">Cidade</label>
            <input id="city" type="text" value={city} onChange={(event) => handleChange(event, "city")}/>
          </div>
          <div className={style.State}>
            <label className={style.StateLabel} htmlFor="states">Estado</label>
            <select onChange={handleSelect} id="states" name="states">
              <option value="">UF</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>
        </div>
        <div className={style.Input}>
          <label htmlFor="subject">Assunto</label>
          <input id="subject" type="text" value={subject} onChange={(event) => handleChange(event, "subject")}/>
        </div>
        <div className={style.Input}>
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" className={style.Message} value={message} onChange={(event) => handleChange(event, "message")}/>
        </div>
        <div className={style.Buttons}>
          <button className={style.Submit} onClick={handleSubmit}>Enviar</button>
          <button className={style.Clean} onClick={handleClean}>Limpar</button>
        </div>
      </form>
    </div>
  );
}

export default MailForm;