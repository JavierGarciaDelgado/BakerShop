import React from "react";
import Header from "../Components/Header";
import { Button, Form, Row, Col } from "react-bootstrap";

function Contacts() {
  return (
    <div>
      <Header />
      <Form>
        <Form.Label>
          <h1>NEW PRODUCT</h1>
        </Form.Label>
        <Row className="mb-3">
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Control placeholder="name" />
            </Form.Group>
          </Col>

          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Control placeholder="brand" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Label>
          <h3>TYPE OF PRODUCT</h3>
        </Form.Label>

        <Row xs="auto">
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Control type="file" accept="image/*" />
              <Form.Text className="text-muted">
                Choose your product image here
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Select aria-label="Default select example">
              <option>Select one type of product</option>
              <option value="flour">flour</option>
              <option value="salt">salt</option>
              <option value="yeast">yeast</option>
              <option value="bread">bread</option>
            </Form.Select>
          </Col>
        </Row>

        <Form.Label>
          <h3>NUTRITIONAL INFORMATION</h3>
        </Form.Label>

        <Row>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>weight</Form.Label>
              <Form.Control placeholder="weight" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>energeticValue</Form.Label>
              <Form.Control placeholder="energeticValue" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>fat</Form.Label>
              <Form.Control placeholder="fat" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>saturedFats</Form.Label>
              <Form.Control placeholder="saturedFats" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>carbohydrates</Form.Label>
              <Form.Control placeholder="carbohydrates" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>sugars</Form.Label>
              <Form.Control placeholder="sugars" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs="auto">
            {" "}
            <Form.Group className="mb-3">
              <Form.Label>dietaryFiber</Form.Label>
              <Form.Control placeholder="dietaryFiber" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            {" "}
            <Form.Group className="mb-3">
              <Form.Label>protein</Form.Label>
              <Form.Control placeholder="protein" />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group className="mb-3">
              <Form.Label>salt</Form.Label>
              <Form.Control placeholder="salt" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>origin</Form.Label>
              <Form.Control placeholder="origin" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>price</Form.Label>
              <Form.Control placeholder="price" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contacts;
