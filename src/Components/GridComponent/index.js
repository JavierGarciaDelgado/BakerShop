import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../CardsComponent";
import axios from "axios";

function GridComponent() {
  const [allProducts, setAllProducts] = useState([]);
  const [lastProducts, setLastProducts] = useState([]);

  const getProducts = () => {
    axios.get("http://localhost:5000/api/Product/sold/sold").then((res) => {
      const products = res.data;
      setAllProducts(products);
    });
  };

  const getLastProducts = () => {
    axios.get("http://localhost:5000/api/Product/lastAdded/lastAdded").then((res) => {
      const lastProducts = res.data;
      setLastProducts(lastProducts);
      console.log(lastProducts)
    });
  };


  useEffect(() => {
    getProducts();
    getLastProducts();
  }, []);

  return (
    <div >
      <Container>
        <Row>
          {allProducts.map((product) => (
            <Col sm key = {product._id} className="mt-4">
              {" "}
              <CardComponent
                id = {product._id}
                image= {product.image}
                title= {product.name}
                text= {product.weight}
                price= {product.price}
              />
            </Col>
          ))}
        </Row>
        Ultimos Productos
        <Row>
          {lastProducts.map((product) => (
            <Col sm key = {product._id} className="mt-4">
              {" "}
              <CardComponent
                id = {product._id}
                image= {product.image}
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
