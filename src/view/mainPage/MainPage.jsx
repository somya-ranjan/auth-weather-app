import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useDispatch } from "react-redux";

// // static import
import Weather from "../weather/Weather";
import Currency from "../currency/Currency";
import { getWeatherData } from "../../store/sagaActions";
import Map from "../map/Map";
import TopBar from "../topBar/TopBar";
import ErrorModal from "../../component/errModal/ErrModal";
import "./style.scss";

function MainPage() {
  // // initial state
  const dispatch = useDispatch();

  // // local state
  const [cordError, setCordError] = useState();

  // // function
  // get current location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
  };
  const successLocation = (position) => {
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getWeatherData({ city: data?.city }));
      });
  };
  const errorLocation = (position) => {
    setCordError(position.message);
  };

  // lifeCycle
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Container fluid className="main_body pb-2 pb-md-0">
      <TopBar />
      <Row>
        <Col xs={12} md={8}>
          <Weather />
        </Col>
        <Col xs={12} md={4}>
          <Map />
          <Currency />
        </Col>
      </Row>
      {cordError && <ErrorModal message={cordError} />}
    </Container>
  );
}

export default MainPage;
