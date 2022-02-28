import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Button, Form, Row, Col, CloseButton } from "react-bootstrap";
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
      console.log(id);
      axios.delete(`http://localhost:5000/api/Demand/${id}`);
      setUseDelete(useDelete + 1);
    }
  };
  

  useEffect(() => {
    getDemands();
  }, [counter]);

  useEffect(() => {
    getMyDemands();
  }, [counter,useDelete]);

  const changeHandler = (e) => {
    setNewDemands((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    //const file = document.getElementById("file").files[0]
    //const fileReader = 0;
    /*if(file){
      uploadImage(fileReader);
    }*/
    //const imageFile = uploadImage(fileReader);
    /*setAllValues((prevValues) => {
      return { ...prevValues, "image": imageFile };
    });*/
    console.log(newDemands);
    axios.post(`http://localhost:5000/api/Demand/ProductDemand`, newDemands);
    setCounter(counter + 1)
    alert(newDemands.user);
  };

  return (
    <div>
      <Header />
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
                type = {demand.type}
                weight = {demand.weight}
                description = {demand.description}
                price = {demand.price}
                origin = {demand.origin}
                dateOfUpload = {demand.dateOfUpload} 
              />
              <hr/>
            </Col>
          ))}
        </Tab>
        <Tab eventKey="allDemands" title="allDemands">
          {allDemands.map((demand) => (
            <Col sm className="mt-4">
              {" "}
              <DemandsComponent
                type = {demand.type}
                weight = {demand.weight}
                description = {demand.description}
                price = {demand.price}
                origin = {demand.origin}
                dateOfUpload = {demand.dateOfUpload} 
              />
              <hr/>
            </Col>
          ))}
        </Tab>
        <Tab eventKey="NewDemand" title="NewDemand">
        <div className="container">
            <Form encType="multipart/form-data">
              <Form.Label className="mt-5">
                <h1>NEW DEMAND</h1>
              </Form.Label>

              <Col xs="auto">
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
                      required
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
    </div>
  );
}

export default ProductDemand;
