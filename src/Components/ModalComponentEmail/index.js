import { updateEmail } from "firebase/auth";
import React, { useState } from "react";
import { Button, Col, Container, Form, Modal } from "react-bootstrap";

function ModalComponentEmail(props) {
  const [allValues, setAllValues] = useState({
    email: "",
    newEmail: "",
    cnfrmNewEmail: "",
    password:"",
  });

  const changeHandler = (e) => {
    setAllValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value }
    });
  };

  const updatedEmail = (e) => {
    e.preventDefault();
      updateEmail(allValues.newEmail);
  };


  return (
    <Modal
      {...props}
      onSubmit={updatedEmail}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">   
          EMAIL CHANGE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <Container>
            <Form>
              <Container>
                <Form.Group>
                  <label className="mt-3">YOUR EMAIL IS</label>
                  <Form.Control value={allValues.email} name="email" onChange={(e) => changeHandler(e)} required />
                </Form.Group>
              </Container>

              <Container>
                <Form.Group>
                  <label className="mt-3">NEW EMAIL</label>
                  <Form.Control value={allValues.newEmail} name="newEmail" onChange={(e) => changeHandler(e)} required />
                </Form.Group>
              </Container>

              <Container>
                <Form.Group>
                  <label className="mt-3">CONFIRM THE NEW EMAIL</label>
                  <Form.Control value={allValues.cnfrmNewEmail} name="cnfrmNewEmail" onChange={(e) => changeHandler(e)} required />
                </Form.Group>
              </Container>
              <Container>
                <Form.Group>
                  <label className="mt-3">YOUR PASSWORD IS</label>
                  <Form.Control value={allValues.password} name="password" onChange={(e) => changeHandler(e)} required />
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

export default ModalComponentEmail;
