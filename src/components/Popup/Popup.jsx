import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem("hasPopupBeenShown");

    if (!hasPopupBeenShown) {
      setShow(true);
      localStorage.setItem("hasPopupBeenShown", "true");
    }
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to NC News!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        When loading the website, allow up to 1 minute for it to load, as it
        takes time due to using the free version of render.com for the API.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
