import React from "react";
import "./styling/List.css";

function List({ list }) {
  return (
    <>
      {list.map((maquina, index) => {
        const { id, img, nombre, marca, precio, stock, categoria } = maquina;
        return (
          <article className="lista" key={id}>
            <h3>
              <img className="photo" src={img} />
            </h3>
            <h3>{nombre} </h3>
            <h3>{precio}</h3>
            <h3>{stock}</h3>
            <h3>{marca}</h3>
            <h3>{id}</h3>
            <h3>{categoria}</h3>
          </article>
        );
      })}
    </>
  );
}

export default List;
