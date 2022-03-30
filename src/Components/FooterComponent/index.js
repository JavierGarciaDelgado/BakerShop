import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import ApiGoogle from "../ApiGoogle";
import "./footerComponent.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue footerFit">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-6 mapDiv">
            <ApiGoogle
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCORr742vl84ftpy4h5iOB9PhACuqp1oX0"
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "600px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              className="map"
            />
          </div>
          <div className="col-md-6">
            <h3>CONTACT US</h3>
            <Form>
              <Row>
              <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control placeholder="Email" />
                </Form.Group>
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
                  <Form.Control as="textarea" rows={12}  placeholder="Write your comments here.." />
                </Form.Group>
              </Row>
              <Button className="mb-3" variant="primary" type="submit" className="secondaryButton">
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
