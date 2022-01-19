import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../Components/CardsComponent";
import axios from "axios";
import Header from "../Components/Header"

function Products(props) {
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = () => {
    axios.get(`http://localhost:5000/api/Product/type/${props.type}`).then((res) => {
      const products = res.data;
      setAllProducts(products);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <div>
      <Header/>
      <Container>
        <h1>{props.type}</h1>
        <Row>
          {allProducts.map((product) => (
            <Col sm key = {product._id}>
              
              {" "}
              <CardComponent
                key = {product._id}
                id = {product._id}
                image= {product.image}
                title= {product.name}
                text= {product.weight}
                price= {product.price}
                calification= {product.calification}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;