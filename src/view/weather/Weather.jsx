import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa6";
import {
  BsCloudSun,
  BsCloudHaze2,
  BsCloudRain,
  BsClouds,
} from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import Forecast from "./comp/forecast/Forecast";
import Details from "./comp/details/Details";

function Weather() {
  // // redux state
  const { weatherData, isWeatherLoading } = useSelector(
    (state) => state?.weather
  );
  return (
    <Row>
      <Col xs={12} className="py-1">
        <h2 className="d-flex align-items-center justify-content-center">
          <span
            className={
              weatherData?.list?.[0].main.temp >= 27 ? "text_red" : "text_green"
            }
          >
            {weatherData?.list?.[0].main.temp >= 27 ? (
              <FaTemperatureHigh className=" display-4 me-1" />
            ) : (
              <FaTemperatureLow className=" display-4 me-1" />
            )}
            {weatherData?.list?.[0].main.temp || 0}&deg;C
          </span>
          <span className="mx-2 text_primary">
            {weatherData?.list?.[0].weather?.[0].main === "Clear" ? (
              <BsCloudSun className="display-3" />
            ) : weatherData?.list?.[0].weather?.[0].main === "Clouds" ? (
              <BsClouds className="display-3" />
            ) : weatherData?.list?.[0].weather?.[0].main === "Haze" ? (
              <BsCloudHaze2 className="display-3" />
            ) : weatherData?.list?.[0].weather?.[0].main === "Rain" ? (
              <BsCloudRain className="display-3" />
            ) : (
              <BsClouds className="display-3" />
            )}
          </span>
          <pan className="text_primary">
            {weatherData?.list?.[0].weather?.[0].main || "---"}
          </pan>
        </h2>
        <h6 className="d-flex align-items-center justify-content-center text_primary">
          <RiUserLocationFill className="fs-5 me-1" />{" "}
          {weatherData?.city?.name || "---"},{" "}
          {weatherData?.city?.country || "---"} ||
          <HiOutlineUserGroup className="fs-5 mx-2" />{" "}
          {weatherData?.city?.population || "---"}
        </h6>
      </Col>
      <Col xs={12} sm={5} lg={4} xl={3}>
        <Details data={weatherData?.list?.[0]} isLoading={isWeatherLoading} />
      </Col>
      <Col xs={12} sm={7} lg={8} xl={9}>
        <Forecast data={weatherData?.list} isLoading={isWeatherLoading} />
      </Col>
    </Row>
  );
}

export default Weather;
