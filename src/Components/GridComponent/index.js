import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../CardsComponent";
import axios from "axios";

function GridComponent() {
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = () => {
    axios.get("http://localhost:5000/api/Product").then((res) => {
      const products = res.data;
      setAllProducts(products);
    });
  };

  useEffect(() => {
    getProducts();
    console.log("hola");
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {allProducts.map((product) => (
            <Col sm>
              {" "}
              <CardComponent
                image="holder.js/100px180"
                title= {product.name}
                text= {product.weight}
                price= {product.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default GridComponent;
