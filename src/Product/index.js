import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import "./product.css";
import CardComponent from "../Components/CardsComponent";
import Table from "react-bootstrap/Table";

function Product(props) {
  const [allProduct, setAllProduct] = useState("");
  const [allProductByType, setAllProductsByType] = useState([]);
  const { id } = useParams();

  const getProductByID = () => {
    console.log(id);
    axios.get(`http://localhost:5000/api/Product/${id}`).then((res) => {
      const product = res.data;
      setAllProduct(product);
    });
  };

  const getProductsByType = () => {
    console.log(allProduct.type);
    axios

      .get(`http://localhost:5000/api/Product/type/${allProduct.type}`)
      .then((res) => {
        const productsByType = res.data;
        setAllProductsByType(productsByType);
      });
  };

  useEffect(() => {
    getProductByID();
  }, []);
  useEffect(() => {
    getProductsByType();
  }, [allProduct]);

  const calculateCalification = () => {
    let stars = [];

    for (let index = 0; index < allProduct.calification; index++) {
      stars.push(<i className="bi bi-star-fill"></i>);
    }
    for (let index = 0; index < 5 - allProduct.calification; index++) {
      stars.push(<i className="bi bi-star"></i>);
    }
    console.log(stars);
    return <>{stars}</>;
  };

  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5">
          <Col className="col-4">
            <img
              src={allProduct.image}
              style={{ height: "500px", width: "100%" }}
              alt="img"
            />
          </Col>
          <Col>
            <h1>{allProduct.name}</h1>
            <h5>{allProduct.brand}</h5>
            {calculateCalification()}
            <hr />
            <p>{allProduct.description}</p>
            <p className="priceMargin">
              <small>Precio:</small> {allProduct.price}€/Unidad
            </p>
            <p className="priceMargin">
              <Row className="mt-3">
                <small>Cantidad:</small>
                <Col className="col-2 mt-2">
                  <Form.Control type="number" min="0" max="10" />
                </Col>
              </Row>
            </p>
            <Row className="mt-5">
              <Col className="col-4">
                <Button className="primaryButton">Añadir al carrito</Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="col-4">
                <Button className="secondaryButton">Comprarlo ya</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <h2>Productos relacionados:</h2>
          {allProductByType.map((product) => {
            return product._id != id ? (
              <Col sm key={product._id}>
                <CardComponent
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  title={product.name}
                  text={product.weight}
                  price={product.price}
                  calification={product.calification}
                />
              </Col>
            ) : (
              <></>
            );
          })}
        </Row>
        <hr />
        <Row>   
          <Col>
          <small>Details of the product</small>
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <th>Name of the product</th>
                  <td>{allProduct.name}</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{allProduct.weight}</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{allProduct.brand}</td>
                </tr>
                <tr>
                  <th>Origin</th>
                  <td>{allProduct.origin}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <small>Nutritional Values </small>
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <th>Energetic Value</th>
                  <td>{allProduct.energeticValue}</td>
                </tr>
                <tr>
                  <th>Fat</th>
                  <td>{allProduct.fat}</td>
                </tr>
                <tr>
                  <th>Satured Fat</th>
                  <td>{allProduct.saturedFats}</td>
                </tr>
                <tr>
                  <th>Carbohydrates</th>
                  <td>{allProduct.carbohydrates}</td>
                </tr>
                <tr>
                  <th>Sugars</th>
                  <td>{allProduct.sugars}</td>
                </tr>
                <tr>
                  <th>Dietary Fiber</th>
                  <td>{allProduct.dietaryFiber}</td>
                </tr>
                <tr>
                  <th>Protein</th>
                  <td>{allProduct.protein}</td>
                </tr>
                <tr>
                  <th>Salt</th>
                  <td>{allProduct.salt}</td>
                </tr>
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
