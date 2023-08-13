import React, { useState } from "react";
import { Col, Container, Input, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { CiDark, CiLogout, CiLight } from "react-icons/ci";

// // static import
import LogoutModal from "../../component/logout/LogoutModal";
import { setTheme } from "../../store/sagaActions";
import { BRAND_ICON } from "../../assets";
import "./style.module.scss";

function NavBar() {
  // // initial state
  const dispatch = useDispatch();
  const tokenPresent = localStorage.getItem("authToken");

  // // redux state
  const { currentTheme } = useSelector((state) => state.common);

  // // local state
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const handelThemeSwitch = () => {
    dispatch(setTheme(currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <Container fluid className="mb-3 shadow-sm py-2 bg_primary text_primary">
      <Row className="align-items-center">
        <Col xs={6}>
          <img src={BRAND_ICON} />
        </Col>
        <Col xs={6} className="text-end">
          <span className="cp" onClick={handelThemeSwitch}>
            {currentTheme === "dark" ? (
              <CiLight className="fs-4 me-2" />
            ) : (
              <CiDark className="fs-4 me-2" />
            )}
          </span>
          <CiLogout
            className={`${!tokenPresent && "d-none"} fs-4 cp`}
            onClick={() => setOpenLogoutModal(true)}
          />
        </Col>
      </Row>
      <LogoutModal isOpen={openLogoutModal} setOpen={setOpenLogoutModal} />
    </Container>
  );
}

export default NavBar;
