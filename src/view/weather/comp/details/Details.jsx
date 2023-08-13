import React from "react";
import { Card, CardBody } from "reactstrap";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { LiaTachometerAltSolid } from "react-icons/lia";
import moment from "moment";

// // static import
import "./style.scss";

function Details({ data }) {
  return (
    <Card className="mb-2 mb-sm-0 bg_primary text_primary">
      <CardBody>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <FaTemperatureHigh className="fw-bolder display-6 ms-1" />
          <h6 className="text-end">
            {data?.main.temp_max || 0}°C <br />
            Max Temp
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <FaTemperatureLow className="fw-bolder display-6 ms-1" />
          <h6 className="text-end">
            {data?.main.temp_min || 0}°C
            <br />
            Min Temp
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <WiHumidity className="fw-bolder display-5 humidity_icon" />
          <h6 className="text-end">
            {data?.main.humidity || 0} <br />
            Humidity
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <BsFillSunriseFill className="fw-bolder display-6" />
          <h6 className="text-end">
            {moment(data?.city?.sunrise)?.format("hh:mmA") || "--"}
            <br />
            Sunrise
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <BsFillSunsetFill className="fw-bolder display-6" />
          <h6 className="text-end">
            {moment(data?.city?.sunset)?.format("hh:mmA") || "--"}
            <br />
            Sunset
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <BiWind className="fw-bolder display-6" />
          <h6 className="text-end">
            {data?.wind.speed || 0}
            <br />
            Wind
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <LiaTachometerAltSolid className="fw-bolder display-6" />
          <h6 className="text-end">
            {data?.main.pressure || 0} <br />
            Pressure
          </h6>
        </div>
      </CardBody>
    </Card>
  );
}

export default Details;
