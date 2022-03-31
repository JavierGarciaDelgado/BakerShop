import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardComponent from "../Components/CardsComponent";
import axios from "axios";
import Header from "../Components/Header";
import { getUserId } from "../Config/firebase";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router-dom";
import "./myProducts.css";

function MyProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [useDelete, setUseDelete] = useState(1);
  const userId = getUserId();

  const getProducts = () => {
    axios
      .get(`http://localhost:5000/api/Product/user/${userId}`)
      .then((res) => {
        const products = res.data;
        setAllProducts(products);
      });
  };

  const deleteProducts = (id) => {
    if (window.confirm("Do you really want to delete?")) {
      axios.delete(`http://localhost:5000/api/Product/${id}`);
      setUseDelete(useDelete + 1);
    }
  };

  useEffect(() => {
    getProducts();
  }, [useDelete]);


  return (
    <div>
      <Header />
      <Container>
        <h1>My Products</h1>
        <Row>
          {allProducts.map((product) => (
            <Col sm key={product._id}>
              <Button as={Link} to={`/NewProduct/${product._id}`} className="EditButton"><i class="bi bi-pencil-square"></i></Button>
              <CloseButton
                value={product._id}
                onClick={(e) => deleteProducts(e.target.value)}
                className="DeleteButton"
              />
              <CardComponent
                key={product._id}
                id={product._id}
                image={product.image}
                title={product.name}
                text={product.weight}
                price={product.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MyProducts;
