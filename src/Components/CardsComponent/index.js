import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardComponent(props) {
  const calculateCalification = () => {
    let stars = [];

    for (let index = 0; index < props.calification; index++) {
      stars.push(<i className="bi bi-star-fill"></i>);
    }
    for (let index = 0; index < 5 - props.calification; index++) {
      stars.push(<i className="bi bi-star"></i>);
    }
    console.log(stars);
    return <>{stars}</>;
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "300px" }} variant="top" src={props.image} />
        <Card.Body className="mb-2">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {calculateCalification()}
            <Row >
              <Col>{props.price}€</Col>
            </Row>
          </Card.Text>
          <Button
            as={Link}
            className="primaryButton"
            to={`/Product/${props.id}`}
          >
            {props.price + "€ just for now"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
