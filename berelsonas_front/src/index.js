import React from "react";
import ReactDOM from "react-dom";
import "./styling/index.css";
import App from "./App";
import Vender from "./components/Vender";
import Reservar from "./components/Reservar";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Vender" element={<Vender />} />
      <Route path="Reservar" element={<Reservar />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
