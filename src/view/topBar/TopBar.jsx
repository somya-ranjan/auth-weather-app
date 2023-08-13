import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import moment from "moment";

// // static import
import { getWeatherData } from "../../store/sagaActions";

function TopBar() {
  // // initial state
  const dispatch = useDispatch();
  // // local state
  const [searchValue, setSearchValue] = useState("");
  const handelSearch = (e) => {
    e.preventDefault();
    dispatch(getWeatherData({ city: searchValue }));
  };

  return (
    <Row className="justify-content-between text_primary">
      <Col xs={9} lg={5} className="d-flex align-items-center">
        <Form className="d-flex w-100" onSubmit={handelSearch}>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            placeholder="Enter city name or zip/postal code..."
            required
            className="bg_primary text_primary"
          />
          <Button className="ms-1" type="submit">
            Search
          </Button>
        </Form>
      </Col>
      <Col xs={3} lg={4}>
        <h6 className="text-primary text-end">
          {moment(new Date()).format("dddd, DD/MM/YYYY")} <br />
          {moment(new Date()).format("hh:mmA")}
        </h6>
      </Col>
    </Row>
  );
}

export default TopBar;
