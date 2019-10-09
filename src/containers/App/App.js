import React from "react";
import style from "./App.module.css";
import { Route } from "react-router-dom";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import Footer from "../../components/Footer/Footer"

function App() {
  return (
    <div className={style.App}>
      <Toolbar />
      <Route path="/"></Route>
      <Footer />      
    </div>
  );
}

export default App;