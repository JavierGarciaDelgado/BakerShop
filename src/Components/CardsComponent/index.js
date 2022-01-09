import React from "react";
import { Card, Button } from "react-bootstrap";

function CardComponent(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{height: "300px"}} variant="top" src={props.image} />
        <Card.Body style={{height: "160px"}}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary">{props.price + "€ just for now"}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
