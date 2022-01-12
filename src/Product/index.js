import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../Components/CardsComponent";
import axios from "axios";
import Header from "../Components/Header"
import { useParams } from "react-router-dom";

function Product(props) {
  const [allProduct, setAllProduct] = useState("");
  const {id}=useParams();

  const getProduct = () => {
    console.log(id)
    axios.get(`http://localhost:5000/api/Product/${id}`).then((res) => {
      const product = res.data;
      setAllProduct(product);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);
  
  return (
    <div>
      <Header/>
      <Container>
        <h1>{allProduct.name}</h1>
        <Row>
          
            <Col sm key = {allProduct._id}>
              {" "}
              <CardComponent
                key = {allProduct._id}
                id = {allProduct._id}
                image= {allProduct.image}
                title= {allProduct.name}
                text= {allProduct.weight}
                price= {allProduct.price}
              />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;