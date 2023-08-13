import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toaster from "../../../utility/toaster";
import { userSignIn } from "../../../store/sagaActions";

function SignIn() {
  // // initial state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (err, value) => {
    if (
      value.email === "super.user@weather.com" &&
      value.password === "Super.user@123"
    ) {
      dispatch(userSignIn());
      navigate("/main-page");
    } else {
      toaster.error("Please enter correct credential.");
      toaster.info("email:-super.user@weather.com and psw:-Super.user@123");
    }
  };
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh_88">
        <Col sm={11} md={8} lg={6} xl={5}>
          <Card className="bg_primary text_primary">
            <CardBody>
              <h5 className="text-center">Sign In</h5>
              <AvForm onValidSubmit={handelSubmit}>
                <AvField
                  name="email"
                  label="Email"
                  type="email"
                  className="bg_primary text_primary"
                  placeholder="Enter email"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter your email",
                    },
                  }}
                />
                <AvField
                  name="password"
                  label="Password"
                  type="password"
                  className="bg_primary text_primary"
                  placeholder="Enter password"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Please enter your password",
                    },
                  }}
                />
                <div className="text-center">
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
