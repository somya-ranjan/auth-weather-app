import React from "react";
import { BsDatabaseDash } from "react-icons/bs";
import "./style.scss";

function NoData() {
  return (
    <div>
      <BsDatabaseDash className="nodata_icon text_primary" />
    </div>
  );
}

export default NoData;
