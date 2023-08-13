import React from "react";
import { BRAND_ICON } from "../../assets";
import "./style.scss";

function FallBackLoader() {
  return (
    <div className="loader_hero">
      <img src={BRAND_ICON} className="img-fluid" />
    </div>
  );
}

export default FallBackLoader;
