import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import {
  Button,
  Form,
  Row,
  Col,
  CloseButton,
  Container,
} from "react-bootstrap";
import { getUserId } from "../Config/firebase";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import DemandsComponent from "../Components/DemandsComponent";
import "./productDemand.css";

function ProductDemand() {
  const [counter, setCounter] = useState(0);
  const [allDemands, setAllDemands] = useState([]);
  const [allMyDemands, setAllMyDemands] = useState([]);
  const [newDemands, setNewDemands] = useState({
    type: "",
    weight: "",
    description: "",
    price: 999,
    origin: "",
    user: getUserId(),
    dateOfUpload: "",
    title: "",
  });
  const userId = getUserId();

  const [key, setKey] = useState("MyDemands");
  const [useDelete, setUseDelete] = useState(1);

  const current = new Date();
  newDemands.dateOfUpload = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}  ${current.getHours()}:${current.getMinutes()}`;

  const getDemands = () => {
    axios.get(`http://localhost:5000/api/Demand`).then((res) => {
      const demands = res.data;
      setAllDemands(demands);
    });
  };
  const getMyDemands = () => {
    axios.get(`http://localhost:5000/api/Demand/user/${userId}`).then((res) => {
      const demands = res.data;
      setAllMyDemands(demands);
    });
  };

  const deleteDemand = (id) => {
    if (window.confirm("Do you really want to delete?")) {
      axios.delete(`http://localhost:5000/api/Demand/${id}`);
      setUseDelete(useDelete + 1);
    }
  };

  useEffect(() => {
    getDemands();
  }, [counter]);

  useEffect(() => {
    getMyDemands();
  }, [counter, useDelete]);

  const changeHandler = (e) => {
    setNewDemands((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/Demand/ProductDemand`, newDemands);
    setCounter(counter + 1);
    alert("Demand Posted")
  };

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="MyDemands" title="MyDemands">
            {allMyDemands.map((demand) => (
              <Col sm className="mt-4">
                {" "}
                <CloseButton
                  value={demand._id}
                  onClick={(e) => deleteDemand(e.target.value)}
                />
                <DemandsComponent
                  type={demand.type}
                  weight={demand.weight}
                  description={demand.description}
                  price={demand.price}
                  origin={demand.origin}
                  dateOfUpload={demand.dateOfUpload}
                  demandId={demand._id}
                  user={demand.user}
                  title={demand.title}
                />
              </Col>
            ))}
          </Tab>
          <Tab eventKey="allDemands" title="allDemands">
            {allDemands.map((demand) => (
              <Col sm className="mt-4">
                {" "}
                <DemandsComponent
                  type={demand.type}
                  weight={demand.weight}
                  description={demand.description}
                  price={demand.price}
                  origin={demand.origin}
                  dateOfUpload={demand.dateOfUpload}
                  demandId={demand._id}
                  user={demand.user}
                  title={demand.title}
                />
                <hr />
              </Col>
            ))}
          </Tab>
          <Tab eventKey="NewDemand" title="NewDemand">
            <div className="container">
              <Form encType="multipart/form-data">
                <Form.Label className="mt-3">
                  <h3>NEW DEMAND</h3>
                </Form.Label>

                <Col className="mb-3" xs="auto">
                  <Form.Group className="mb-3">
                    <Form.Control
                      value={newDemands.title}
                      name="title"
                      onChange={(e) => changeHandler(e)}
                      placeholder="Title"
                    />
                  </Form.Group>
                </Col>

                <Col className="mb-3" xs="auto">
                  <Form.Select
                    name="type"
                    onChange={(e) => changeHandler(e)}
                    aria-label="Default select example"
                    required
                  >
                    <option>Select one type of product</option>
                    <option value="flour">Flour</option>
                    <option value="salt">Salt</option>
                    <option value="yeast">Yeast</option>
                    <option value="bread">Bread</option>
                  </Form.Select>
                </Col>

                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        value={newDemands.origin}
                        name="origin"
                        onChange={(e) => changeHandler(e)}
                        placeholder="Origin"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        value={newDemands.price}
                        name="price"
                        onChange={(e) => changeHandler(e)}
                        placeholder="Price"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control
                    value={newDemands.description}
                    name="description"
                    onChange={(e) => changeHandler(e)}
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                  />
                </Form.Group>

                <Col xs={2}>
                  <Button
                    onClick={(e) => submitForm(e)}
                    variant="primary"
                    type="submit"
                    className="primaryButton"
                  >
                    Submit
                  </Button>
                </Col>
              </Form>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default ProductDemand;
