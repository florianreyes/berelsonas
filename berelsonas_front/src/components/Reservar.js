import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../styling/App.css";

function Reservar() {
  const navigate = useNavigate();
  const [machine, setMachine] = useState({
    clientName: "",
    phone: "",
    address: "",
    seña: 0,
    quantity: 0,
    date: "1-1-2000",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMachine({ ...machine, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <Button onClick={() => navigate(-1)}>Atras</Button>
        </div>
      </div>
      <div className="row justify-content-center" style={{ marginTop: 40 }}>
        <div className="col-4" style={{ backgroundColor: "red" }}>
          <img
            className="foto"
            src="http://d3ugyf2ht6aenh.cloudfront.net/stores/536/222/products/1_1000x1000-11-f95ee48af0a0ff1b5716201480108757-640-0.jpg"
            alt="logo"
          />
        </div>

        <div className="col-4" style={{ backgroundColor: "yellow" }}>
          <text>Completar informacion del cliente</text>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              paddingInline: 40,
            }}
          >
            <input
              className="input"
              type="text"
              placeholder="Nombre del cliente"
              name="name"
              value={machine.clientName}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              placeholder="Numero de telefono"
              name="number"
              value={machine.phone}
              onChange={handleChange}
            />

            <input
              className="input"
              type="text"
              placeholder="Direccion"
              name="direction"
              value={machine.address}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              placeholder="Seńa del cliente"
              name="seña"
              value={machine.seña}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              placeholder="Cantidad de maquinas"
              name="cuantity"
              value={machine.quantity}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              placeholder="fecha de reserva"
              name="reserva"
              value={machine.date}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservar;
