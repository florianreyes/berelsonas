import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../styling/App.css";

function Vender() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <Button onClick={() => navigate(-1)}>Atras</Button>
        </div>
      </div>
      <div className="row justify-content-around">
        <div className="col-4">
          <img
            className="foto"
            src="http://d3ugyf2ht6aenh.cloudfront.net/stores/536/222/products/1_1000x1000-11-f95ee48af0a0ff1b5716201480108757-640-0.jpg"
            alt="logo"
          />
          <div className="col">
            <input className="input" type="text" placeholder="insert text" />
          </div>
          <div className="col">
            <input className="input" type="text" placeholder="insert text" />
            <input className="input" type="text" placeholder="insert text" />
            <input className="input" type="text" placeholder="insert text" />
            <input className="input" type="text" placeholder="insert text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vender;
