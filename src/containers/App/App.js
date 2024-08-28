import React from "react";
import style from "./App.module.css";
import { Route } from "react-router-dom";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import Footer from "../../components/Footer/Footer"
import Company from "../../components/Company/Company"
import Operation from "../../components/Operation/Operation"
import Torqlite from "../../components/Products/Torqlite/Torqlite"
import Contact from "../../components/Contact/Contact"

function App() {
  return (
    <div className={style.App}>
      <Toolbar/>
      <div className={style.Content}>
        <Route exact path="/"><Company/></Route>
        <Route path="/atuacao"><Operation/></Route>
        <Route path="/produtos/torqlite"><Torqlite/></Route>
        <Route path="/contato"><Contact/></Route>
      </div>
      <Footer/>
    </div>
  );
}

export default App;