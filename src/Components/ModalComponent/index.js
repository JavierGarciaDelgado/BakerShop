import React from "react";
import { Button, Col, Container, Form, Modal } from "react-bootstrap";

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
          BILLING DETAILS
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Container>
            <Form>
              <Container>
                <Form.Group>
                  <label className="mt-3">TAX IDENTIFICATION NUMBER</label>
                  <Form.Control name="taxIdNumber" required />
                </Form.Group>
              </Container>

              <Container>
                <Form.Group>
                  <label className="mt-3">COMPANY NAME</label>
                  <Form.Control name="companyName" required />
                </Form.Group>
              </Container>

              <Container>
                <Form.Group>
                  <label className="mt-3">NAME</label>
                  <Form.Control name="name" required />
                </Form.Group>
              </Container>
              <Container>
                <Form.Group>
                  <label className="mt-3">SURNAME(S)</label>
                  <Form.Control name="surname" required />
                </Form.Group>
              </Container>

              <Container>
                <Form.Group>
                  <label className="mt-3">ADDRESS</label>
                  <Form.Control name="address" required />
                </Form.Group>
              </Container>

              <Container>
                <Form.Group>
                  <label className="mt-3">POST CODE</label>
                  <Form.Control name="postCode" required />
                </Form.Group>
              </Container>

              <Container>
                <label className="mt-3">CITY</label>
                <Form.Group>
                  <Form.Control name="city" required />
                </Form.Group>
              </Container>

              <Container>
                <label className="mt-3">COUNTRY</label>
                <Form.Group>
                  <Form.Control name="country" required />
                </Form.Group>
              </Container>

              <Container>
                <label className="mt-3">MOBILE TELEPHONE</label>
                <Form.Group className="mb-3">
                  <Form.Control name="telephone" required />
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

export default ModalComponent;
