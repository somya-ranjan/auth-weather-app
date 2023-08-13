import React from "react";
import { LOADER } from "../../assets";
import "./style.scss";

function Loader() {
  return (
    <div className="loader_hero">
      <img src={LOADER} className="img-fluid" />
    </div>
  );
}

export default Loader;
