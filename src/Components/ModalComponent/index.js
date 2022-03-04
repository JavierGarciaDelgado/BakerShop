import React from "react";
import { Button, Modal } from "react-bootstrap";


function ModalComponent(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            TAX IDENTIFICATION NUMBER *
            COMPANY NAME *
            NAME *
            SURNAME(S) *
            ADDRESS *
            POST CODE *
            CITY *
            COUNTRY *
            MOBILE TELEPHONE *

          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalComponent;