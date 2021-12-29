import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../CardsComponent";
import axios from "axios";

function GridComponent() {
  const [allFlours, setAllFlours] = useState([]);

  const getFlours = () => {
    axios.get("http://localhost:5000/api/Flour").then((res) => {
      const flours = res.data;
      setAllFlours(flours);
    });
  };

  useEffect(() => {
    getFlours();
    console.log("hola");
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {allFlours.map((flour) => (
            <Col sm>
              {" "}
              <CardComponent
                image="holder.js/100px180"
                title= {flour.name}
                text= {flour.peso}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default GridComponent;
