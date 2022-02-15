import "./styling/App.css";

import React, { useState, useEffect } from "react";
import List from "./components/List";
import maquinas from "./components/maquinas";

function App() {
  const [list, setList] = useState(maquinas);

  return (
    <div className="App">
      <header style={{ position: "sticky" }}>
        <img src={require("./berelsonas_logo.png")} alt="logo" />
      </header>
      <div className="Display">
        <h6>Imagen</h6>
        <h6>Nombre</h6>
        <h6>Precio</h6>
        <h6>Stock</h6>
        <h6>Marca</h6>
        <h6>id</h6>
        <h6>Categoria</h6>
      </div>

      <article>
        <List list={list} />
      </article>
    </div>
  );
}

export default App;
