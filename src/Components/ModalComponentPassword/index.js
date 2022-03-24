import React from "react";
import { Button, Col, Container, Form, Modal } from "react-bootstrap";

function ModalComponentPassword(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">   
          PASSWORD CHANGE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Container>
            <Form>
              <Container>
                <Form.Group>
                  <label className="mt-3">YOUR PASSWORD IS</label>
                  <Form.Control name="password" required />
                </Form.Group>
              </Container>

              <Container>
                <Form.Group>
                  <label className="mt-3">NEW PASSWORD</label>
                  <Form.Control name="newPassword" required />
                </Form.Group>
              </Container>

              <Container>
                <Form.Group>
                  <label className="mt-3">CONFIRM THE NEW PASSWORD</label>
                  <Form.Control name="cnfrmNewPassword" required />
                </Form.Group>
              </Container>
            </Form>
          </Container>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Col className="mt-5" xs={3}>
          <Button className="secondaryButton" onClick={props.onHide}>
            Close
          </Button>
        </Col>
        <Col className="mt-5" xs={3}>
          <input
            type="submit"
            name="submit"
            className="primaryButton"
            value="Save changes"
          />
        </Col>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponentPassword;
