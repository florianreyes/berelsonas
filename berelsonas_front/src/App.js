import "./App.css";

import React, { useState, useEffect } from "react";
import List from "./List";
import maquinas from "./maquinas";

function App() {
  const [list, setList] = useState(maquinas);

  return (
    <div className="App">
      <header>
        <img src={require("./berelsonas_logo.png")} alt="logo" />
      </header>
      <div className="Display">
        <h3>Imagen</h3>
        <h3>Nombre</h3>
        <h3>Precio</h3>
        <h3>Stock</h3>
        <h3>Marca</h3>
        <h3>id</h3>
        <h3>Categoria</h3>
      </div>

      <article>
        <List list={list} />
      </article>
    </div>
  );
}

export default App;
