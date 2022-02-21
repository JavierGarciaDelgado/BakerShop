import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Button, Form, Row, Col } from "react-bootstrap";
import { getUserId } from "../Config/firebase";
import "./productDemand.css";

function ProductDemand() {
  const [allDemands, setAllDemands] = useState(
    {
      type: "",
      weight: "",
      description: "",
      price: 999,
      origin: "",
      user: getUserId(),
      dateOfUpload: "",
    },
  );

  /*const getDemands = () => {
    axios.get(`http://localhost:5000/api/Demand`).then((res) => {
      const demands = res.data;
      setAllDemands(demands);
    });
  };

  useEffect(() => {
    getDemands();
  }, []);*/

  const changeHandler = (e) => {
    setAllDemands((prevValues) => {
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
    console.log(allDemands)
    axios.post(`http://localhost:5000/api/Demand/ProductDemand`, allDemands);
    alert(allDemands.user);
  };

  return (
    <div>
      <Header />
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
                  value={allDemands.origin}
                  name="origin"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Origin"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  value={allDemands.price}
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
              value={allDemands.description}
              name="description"
              onChange={(e) => changeHandler(e)}
              as="textarea"
              rows={3}
              placeholder="Description"
            />
          </Form.Group>

        <Col xs={2}><Button
            onClick={(e) => submitForm(e)}
            variant="primary"
            type="submit"
            className="primaryButton"
          >
            Submit
          </Button></Col>
          
        </Form>
      </div>

    </div>
  );
}

export default ProductDemand;
