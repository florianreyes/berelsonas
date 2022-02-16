import React, { useState } from "react";
import Display from "./Display";
import maquinas from "./maquinas";
import List from "./List";

function Stock() {
  const [list, setList] = useState(maquinas);
  return (
    <div>
      <div>
        <Display />
      </div>
      <article>
        <List list={list} />
      </article>
    </div>
  );
}

export default Stock;
