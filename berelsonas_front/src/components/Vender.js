import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Vender() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(-1)}>Atras</Button>;
}

export default Vender;
