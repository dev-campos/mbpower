import React from 'react';

import Segments from "./Segments/Segments"
import Clients from "./Clients/Clients"

const Operation = (props) => (
  <div>
    <h2>Segmentos</h2>
    <Segments />
    <h2>Alguns Clientes</h2>
    <Clients />
  </div>

);

export default Operation;