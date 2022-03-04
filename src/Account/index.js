import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import ModalComponent from "../Components/ModalComponent";

function Account() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Header />
      <Container>  
        <h1>ACCESS YOUR ACCOUNT</h1>
        <h5>PASSWORD</h5>
        <Row>
          <b>********</b>
          {/*<link>Change Password</link>*/}
        </Row>
        <hr />
        <h5>YOUR EMAIL ADDRESS</h5>
        <Row>
          {/*<link>Change email address</link>*/}
          <b>Aqui va a ir el correo electrónico</b>
        </Row>
        <h1>BILLING DETAILS</h1>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </div>
  );
}

export default Account;
