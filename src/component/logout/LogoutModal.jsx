import React from "react";
import { useSelector } from "react-redux";
import { Modal, ModalBody, Button } from "reactstrap";
import { SlInfo } from "react-icons/sl";

function LogoutModal({ isOpen, setOpen }) {
  // // redux state
  const { currentTheme } = useSelector((state) => state.common);

  const handelLogOut = () => {
    localStorage.clear();
    localStorage.setItem("theme", currentTheme);
    window.location.reload();
  };

  return (
    <Modal
      isOpen={isOpen}
      centered
      size="md"
      backdrop="static"
      data-theme={currentTheme}
      className="bg-transparent"
    >
      <ModalBody className="py-4">
        <SlInfo className="d-block mb-3 mx-auto display-1" />
        <p className="text-center">
          The action you are going to perform is irreversible. Please confirm!
          Are you sure that you want to logout?
        </p>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Button
            color="primary"
            className="rounded px-5 me-3"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            className="rounded px-3"
            onClick={handelLogOut}
          >
            Yes log me out
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default LogoutModal;
