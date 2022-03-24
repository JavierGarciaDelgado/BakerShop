import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import ModalComponent from "../Components/ModalComponent";
import ModalComponentEmail from "../Components/ModalComponentEmail";
import ModalComponentPassword from "../Components/ModalComponentPassword";
import { getUserEmail, getUserId } from "../Config/firebase";
import "./account.css";

function Account() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalPasswordShow, setModalPasswordShow] = React.useState(false);
  const [modalEmailShow, setModalEmailShow] = React.useState(false);
  const [email, setNewEmail] = React.useState("");

  useEffect(() => {
      setNewEmail(getUserEmail()) 
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <h3 className="mt-5">ACCESS YOUR ACCOUNT</h3>
        <Container>
          <p className="accountSettings">
            <small className="mt-4">PASSWORD</small>
          </p>
          <Row className="mt-3">
            <Col>
              <b>********</b>
            </Col>
            <Col>
              {
                <Button
                  className="changeEmail"
                  onClick={() => setModalPasswordShow(true)}
                >
                  Change Password<i class="bi bi-pencil-square"></i>
                </Button>
              }
            </Col>
            <p>
              if you want to change your password, click on "Change Password"
              and complete de areas with the correct information
            </p>
            <ModalComponentPassword
              show={modalPasswordShow}
              onHide={() => setModalPasswordShow(false)}
            />
          </Row>
          <hr className="division"></hr>
          <p className="accountSettings">
            <small>YOUR EMAIL ADDRESS</small>
          </p>

          <Row className="mt-3">
            <Col>
              <b>{email}</b>
            </Col>
            <Col>
              {
                <span
                  className="changeEmail"
                  onClick={() => setModalEmailShow(true)}
                >
                  Change email address<i class="bi bi-pencil-square"></i>
                </span>
              }
            </Col>
            <p className="mt-3">
              if you want to change your email, click on "Change email address"
              and complete the areas with the correct information
            </p>
            <ModalComponentEmail
              show={modalEmailShow}
              onHide={() => setModalEmailShow(false)}
            />
          </Row>
          <hr className="division"></hr>
        </Container>

        <Row className="mt-5">
          <Col>
            <h3>BILLING DETAILS</h3>
          </Col>
          <Col>
            <Button className="changeEmail" onClick={() => setModalShow(true)}>
              edit<i class="bi bi-pencil-square"></i>
            </Button>
          </Col>
        </Row>
        <Container>
          <p className="mt-3">
            if you willing to change your billing details, click on "edit" and
            complete the areas with the correct information{" "}
          </p>
        </Container>

        <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </div>
  );
}

export default Account;
