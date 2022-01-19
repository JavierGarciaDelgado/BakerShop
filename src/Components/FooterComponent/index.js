import React from "react";
import { Button, Form, Row } from "react-bootstrap";

const Footer = () => (
  <footer className="page-footer font-small blue pt-5 mt-5">
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-md-6 mt-md-0">
          <h4>ABOUT US</h4>
          <p>Aqui va el mapa cuando hagamos lo de la api si lo hacemos.</p>
        </div>
        <div className="col-md-3">
          <h4>CONTACT US</h4>
          <Form>
            <Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control placeholder="Subject" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Row>
            <Button className="mb-3" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
