import React from "react";
import Header from "../Components/Header";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./newProduct.css";

function Contacts() {
  const selectFile = () => {
    document.getElementById("file").click();
  };
  return (
    <div>
      <Header />
      <div className="container">
        <Form>
          <Form.Label className="mt-5">
            <h1>NEW PRODUCT</h1>
          </Form.Label>

          <Col xs="auto">
              <Form.Group className="mb-3">
                <div onClick={selectFile} className="uploadDiv">
                  <i className="bi bi-cloud-arrow-up iconUpload"></i>
                </div>
                <Form.Control
                  id="file"
                  type="file"
                  accept="image/*"
                  className="d-none"
                />
                <Form.Text className="text-muted">
                  Choose your product image here
                </Form.Text>
              </Form.Group>
            </Col>
          <Row className="mb-3">
            
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Name" required />
              </Form.Group>
            </Col>

            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Brand" required />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Select aria-label="Default select example" required>
                <option>Select one type of product</option>
                <option value="flour">Flour</option>
                <option value="salt">Salt</option>
                <option value="yeast">Yeast</option>
                <option value="bread">Bread</option>
              </Form.Select>
            </Col>
          </Row>


          <Form.Label>
            <h3>NUTRITIONAL INFORMATION</h3>
          </Form.Label>

          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Weight" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Energetic value" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Fat" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Satured fats" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Carbohydrates" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Sugars" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs="auto">
              {" "}
              <Form.Group className="mb-3">
                <Form.Control placeholder="Dietary fiber" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              {" "}
              <Form.Group className="mb-3">
                <Form.Control placeholder="Protein" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Salt" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Origin" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Price" required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Description" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contacts;
