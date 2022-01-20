import React, { useState } from "react";
import Header from "../Components/Header";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./newProduct.css";
import { getUserId } from "../Config/firebase";
import axios from "axios";

function Contacts() {

  const [allValues, setAllValues] = useState({
    type: "",
    name: "",
    weight: "",
    brand: "",
    image: "",
    energeticValue: "",
    fat: "",
    saturedFats: "",
    carbohydrates: "",
    sugars: "",
    dietaryFiber: "",
    protein: "",
    salt: "",
    description: "",
    price: 999,
    sold: 0,
    calification: 0,
    origin: "",
    user: getUserId()
 });

 console.log(allValues)
  const selectFile = () => {
    document.getElementById("file").click();
  };

  const changeHandler = e => {
    setAllValues( prevValues => {
    return { ...prevValues,[e.target.name]: e.target.value}
    })
 };

 const submitForm = e =>{
   e.preventDefault();
   const header = {'headers': {
    'Access-Control-Allow-Origin': '*' , "Access-Control-Allow-Credentials": "true", "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"}}
   axios.post(`http://localhost:5000/api/Product/newProduct`, allValues,header
)
 }

  return (
    <div>
      <Header />
      <div className="container">
        <Form encType="multipart/form-data">
          <Form.Label className="mt-5">
            <h1>NEW PRODUCT</h1>
          </Form.Label>

          <Col xs="auto">
              <Form.Group className="mb-3">
                <div id="image" onClick={selectFile} className="uploadDiv">
                  <i className="bi bi-cloud-arrow-up iconUpload"></i>
                </div>
                <Form.Control
                  id="file"
                  type="file"
                  accept="image/*"
                  className="d-none"
                  value={allValues.image} name="image"
                  onChange={(e)=>{
                    changeHandler(e)
                    document.getElementById("image").innerHTML=`<img src='${e.target.value}'/>`
                  }}
                />
                <Form.Text className="text-muted">
                  Choose your product image here
                </Form.Text>
              </Form.Group>
            </Col>
          <Row className="mb-3">
            
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control value={allValues.name} name="name" onChange={e => changeHandler(e) } placeholder="Name" required />
              </Form.Group>
            </Col>

            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control value={allValues.brand} name="brand" onChange={e => changeHandler(e) } placeholder="Brand" required />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Select aria-label="Default select example" required>
                <option>Select one type of product</option>
                <option value="flour">Flour</option>
                <option value="salt">Salt</option>
                <option value="yeast">Yeast</option>
                <option value="bread">Bread</option>
              </Form.Select>
            </Col>
          </Row>


          <Form.Label>
            <h3>NUTRITIONAL INFORMATION</h3>
          </Form.Label>

          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control value={allValues.weight} name="weight" onChange={e => changeHandler(e) } placeholder="Weight" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control value={allValues.energeticValue} name="energeticValue" onChange={e => changeHandler(e) } placeholder="Energetic value" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control value={allValues.fat} name="fat" onChange={e => changeHandler(e) } placeholder="Fat" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control value={allValues.saturedFats} name="saturedFats" onChange={e => changeHandler(e) } placeholder="Satured fats" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control value={allValues.carbohydrates} name="carbohydrates" onChange={e => changeHandler(e) } placeholder="Carbohydrates" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control value={allValues.sugars} name="sugars" onChange={e => changeHandler(e) } placeholder="Sugars" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs="auto">
              {" "}
              <Form.Group className="mb-3">
                <Form.Control value={allValues.dietaryFiber} name="dietaryFiber" onChange={e => changeHandler(e) } placeholder="Dietary fiber" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              {" "}
              <Form.Group className="mb-3">
                <Form.Control value={allValues.protein} name="protein" onChange={e => changeHandler(e) } placeholder="Protein" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control value={allValues.salt} name="salt" onChange={e => changeHandler(e) } placeholder="Salt" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control value={allValues.origin} name="origin" onChange={e => changeHandler(e) } placeholder="Origin" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control value={allValues.price} name="price" onChange={e => changeHandler(e) } placeholder="Price" required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control value={allValues.description} name="description" onChange={e => changeHandler(e) } as="textarea" rows={3} placeholder="Description" />
          </Form.Group>

          <Button onClick={e => submitForm(e)} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contacts;
