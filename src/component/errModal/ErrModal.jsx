import React from "react";
import { Modal, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
import { SlClose } from "react-icons/sl";

function ErrorModal({ message }) {
  // // redux state
  const { currentTheme } = useSelector((state) => state.common);
  return (
    <Modal
      isOpen={true}
      centered
      size="md"
      backdrop="static"
      data-theme={currentTheme}
      className="bg-transparent"
    >
      <ModalBody className="py-4 ">
        <SlClose className="d-block mb-2 mx-auto display-1 text_red" />
        <h5>{message} </h5>
        <h6 className="text-capitalize">
          please enable/allow location access in your mobile / web browser
          settings to proceed ahead. <br /> <br />
          <span className="text-center d-block">Thank You !</span>
        </h6>
      </ModalBody>
    </Modal>
  );
}

export default ErrorModal;
