import React from "react";
import { Card, Button } from "react-bootstrap";

function CardComponent(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary">Go and buy it</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
