import React from "react";
import "../styling/List.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function List({ list }) {
  const navigate = useNavigate();

  return (
    <>
      {list.map((maquina, index) => {
        const { id, img, nombre, marca, precio, stock, categoria } = maquina;
        return (
          <article className="lista" key={id}>
            <img className="photo" src={img} />
            <h5>{nombre} </h5>
            <h5>{precio}</h5>
            <h5>{stock}</h5>
            <h5>{marca}</h5>
            <h5>{id}</h5>
            <h5>{categoria}</h5>
            <div className="col-xs-2">
              <Button
                onClick={() => navigate("vender")}
                type="button"
                variant="primary"
              >
                Vender
              </Button>
            </div>
            <div className="col-xs-2">
              <Button
                onClick={() => navigate("vender")}
                type="button"
                variant="primary"
              >
                Reservar
              </Button>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
