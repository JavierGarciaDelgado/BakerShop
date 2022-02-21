import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import "./product.css";
import CardComponent from "../Components/CardsComponent";
import Table from "react-bootstrap/Table";

function Product() {
  const [allProduct, setAllProduct] = useState("");
  const [allProductByType, setAllProductsByType] = useState([]);
  const { id } = useParams();

  const getProductByID = () => {
    axios.get(`http://localhost:5000/api/Product/${id}`).then((res) => {
      const product = res.data;
      setAllProduct(product);
    setAllProduct((prevValues) => {
      return {...prevValues,"amount":1}});
  });
  };

  const getProductsByType = () => {
    axios

      .get(`http://localhost:5000/api/Product/type/${allProduct.type}`)
      .then((res) => {
        const productsByType = res.data;
        setAllProductsByType(productsByType);
      });
  };

  const changeHandler = (e) => {
    setAllProduct((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const addToCart = () => {
    localStorage.setItem(allProduct.name, JSON.stringify(allProduct));
  }

  useEffect(() => {
    getProductByID();
  }, [id]);
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
                  <Form.Control 
                  value={allProduct.amount}
                  name="amount"
                  onChange={(e) => changeHandler(e)}
                  type="number" min="1" max="10"
                  defaultValue="1" />
                </Col>
              </Row>
            </p>
            <Row className="mt-5">
              <Col className="col-4">
                <Button onClick={addToCart} className="primaryButton">Añadir al carrito</Button>
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
                {allProduct.energeticValue !== "" ? (
                  <tr>
                    <th>Energetic Value</th>
                    <td>{allProduct.energeticValue}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {allProduct.fat !== "" ? (
                  <tr>
                    <th>Fat</th>
                    <td>{allProduct.fat}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {allProduct.saturedFats !== "" ? (
                  <tr>
                    <th>Satured Fat</th>
                    <td>{allProduct.saturedFats}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {allProduct.carbohydrates !== "" ? (
                  <tr>
                    <th>Carbohydrates</th>
                    <td>{allProduct.carbohydrates}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {allProduct.sugars !== "" ? (
                  <tr>
                    <th>Sugars</th>
                    <td>{allProduct.sugars}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {allProduct.dietaryFiber !== "" ? (
                  <tr>
                    <th>Dietary Fiber</th>
                    <td>{allProduct.dietaryFiber}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {allProduct.protein !== "" ? (
                  <tr>
                    <th>Protein</th>
                    <td>{allProduct.protein}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {allProduct.salt !== "" ? (
                  <tr>
                    <th>Salt</th>
                    <td>{allProduct.salt}</td>
                  </tr>
                ) : (
                  <></>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        <hr />
        <Row>
          <h2>Productos relacionados:</h2>
          {allProductByType.map((product) => {
            return product._id !== id ? (
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
      </Container>
    </div>
  );
}

export default Product;
