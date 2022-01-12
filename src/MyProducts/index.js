import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../Components/CardsComponent";
import axios from "axios";
import Header from "../Components/Header"
import { getUserId } from "../Config/firebase";

function MyProducts(props) {
  const [allProducts, setAllProducts] = useState([]);
  const userId = getUserId();

  const getProducts = () => {
    axios.get(`http://localhost:5000/api/Product/user/${userId}`).then((res) => {
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
        <h1>My Products</h1>
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MyProducts;