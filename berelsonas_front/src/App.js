import "./styling/App.css";

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header style={{ position: "sticky" }}>
        <img src={require("./berelsonas_logo.png")} alt="logo" />
      </header>

      <Outlet />
    </div>
  );
}

export default App;
