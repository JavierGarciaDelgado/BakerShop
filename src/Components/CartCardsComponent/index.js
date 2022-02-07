import { Card,  Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "./cartCardsComponent.css";

function CartCardComponent(props) {

  return (
    <div>
      <Card   as={Link}
              to={`/Product/${props.id}`} 
              style={{ width: "23.5rem" }} 
              className="cardStyling cartLink">
        <Row>
        <Col>
          <Card.Img
            style={{ height: "150px" }}
            variant="top"
            src={props.image}
          />
        </Col>

        <Col>
          <Card.Body className="mb-2">
            <Card.Title>{(props.price * props.amount).toFixed(2)}€</Card.Title>
            <Card.Text>
            <Row>
              {props.title}
            </Row>
            <Row>Amount: {props.amount}</Row>
              
            </Card.Text>
          </Card.Body>
        </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CartCardComponent;
