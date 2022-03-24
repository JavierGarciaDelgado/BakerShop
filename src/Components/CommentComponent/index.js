import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

import { Button } from "react-bootstrap";
import "./commentComponent.css";
import { getUserId } from "../../Config/firebase";

function CommentComponent(props) {
  
  const allFit = () => {
    console.log(props)
    console.log(getUserId())
    if (props.user !== getUserId()) {
      console.log("No se puede borrar");
      return true;
    } else {
      console.log("Ahora si se puede borrar");
      return false;
    }
  };


  return (
    <div className="mt-3">
      <Container>
        <Card>
          <Card.Header>{props.userUID}</Card.Header>
          <Card.Body>
            <Card.Title className="titlePosition">{props.title}</Card.Title>
            <Card.Text>{props.comment}</Card.Text>
            {props.price}€
            <Button
              as={Link}
              disabled={allFit()}
              to={`/Product/${props.link}`}
              className="checkButton checkPosition"
            >
              <i class="bi bi-check-lg"></i>
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CommentComponent;
