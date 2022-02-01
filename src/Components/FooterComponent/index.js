import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import ApiGoogle from "../ApiGoogle";
import "./footerComponent.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-5 mt-5 footerFit">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-6 mt-md-0">
            <h4>ABOUT US</h4>
            <ApiGoogle
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCORr742vl84ftpy4h5iOB9PhACuqp1oX0"
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "400px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
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
};

export default Footer;
