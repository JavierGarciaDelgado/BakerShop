import { Card,  Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "./demandsComponent.css";

function DemandsComponent(props) {

  return (
    <div>
{props.type}
{props.weight}
{props.description}
{props.price}
{props.origin}
{props.dateOfUpload} {console.log(props.dateOfUpload)}
    </div>
  );
}

export default DemandsComponent;