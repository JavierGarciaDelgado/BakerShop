import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./newProduct.css";
import { getUserId, uploadImage } from "../Config/firebase";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    user: getUserId(),
    dateOfUpload: "",
  });
  const { id } = useParams();
  const current = new Date();
  allValues.dateOfUpload = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}  ${current.getHours()}:${current.getMinutes()}`;

  const selectFile = () => {
    document.getElementById("file").click();
  };

  const getProductByID = () => {
    console.log(id);
    axios.get(`http://localhost:5000/api/Product/${id}`).then((res) => {
      const product = res.data;
      setAllValues(() => {
        return {
          ["type"]: product.type,
          ["name"]: product.name,
          ["weight"]: product.weight,
          ["brand"]: product.brand,
          ["energeticValue"]: product.energeticValue,
          ["fat"]: product.fat,
          ["saturedFats"]: product.saturedFats,
          ["carbohydrates"]: product.carbohydrates,
          ["sugars"]: product.sugars,
          ["dietaryFiber"]: product.dietaryFiber,
          ["protein"]: product.protein,
          ["salt"]: product.salt,
          ["description"]: product.description,
          ["price"]: product.price,
          ["origin"]: product.origin,
        };
      });
      console.log("hola");
      console.log(allValues);
    });
  };

  useEffect(() => {
    if (id) {
      getProductByID();
    }
  }, [id]);

  const changeHandler = (e) => {
    setAllValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const allFit = () => {
    if (
      /*allValues.image == "" ||
      allValues.type == "" ||
      allValues.name == "" ||
      allValues.weight == "" ||
      allValues.brand == "" ||
      allValues.energeticValue == "" ||
      allValues.fat == "" ||
      allValues.saturedFats == "" ||
      allValues.carbohydrates == "" ||
      allValues.sugars == "" ||
      allValues.dietaryFiber == "" ||
      allValues.protein == "" ||
      allValues.salt == "" ||
      allValues.description == "" ||
      */ allValues.price == 999 ||
      allValues.price == 0 ||
      allValues.origin == ""
    ) {
      console.log("está funcionando");
      return true;
    } else {
      console.log("ya no");
      return false;
    }
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
    if (id) {
      axios.put(`http://localhost:5000/api/Product/newProduct/${id}`,allValues)
      alert("Product updated")
    } else {
      axios.post(`http://localhost:5000/api/Product/newProduct`, allValues);
      alert("Product posted");
    }
  };

  const uploadFileImage = (e) => {
    const file = document.getElementById("file").files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", (e) => {
      document.getElementById(
        "image"
      ).innerHTML = `<img class="uploadPreview" src='${e.target.result}'/>`;
    });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Form encType="multipart/form-data">
          <Form.Label className="mt-5">
            {id ? <h1>UPDATE PRODUCT</h1> : <h1>NEW PRODUCT</h1>}
          </Form.Label>

          <Col xs="auto">
            <Form.Group className="mb-3">
              <div id="image" onClick={selectFile} className="uploadDiv">
                <div className="mt-4">
                  <i className="bi bi-cloud-arrow-up iconUpload"></i>
                </div>
              </div>
              <Form.Control
                id="file"
                type="file"
                accept="image/*"
                className="d-none"
                value={allValues.image}
                name="image"
                onChange={(e) => {
                  uploadFileImage(e);
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
                <Form.Control
                  value={allValues.name}
                  name="name"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Name"
                  required
                />
              </Form.Group>
            </Col>

            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.brand}
                  name="brand"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Brand"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Select
                name="type"
                value={allValues.type}
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
          </Row>

          <Form.Label>
            <h3>NUTRITIONAL INFORMATION</h3>
          </Form.Label>

          <Row>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.weight}
                  name="weight"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Weight"
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.energeticValue}
                  name="energeticValue"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Energetic value"
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.fat}
                  name="fat"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Fat"
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.saturedFats}
                  name="saturedFats"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Satured fats"
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.carbohydrates}
                  name="carbohydrates"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Carbohydrates"
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.sugars}
                  name="sugars"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Sugars"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs="auto">
              {" "}
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.dietaryFiber}
                  name="dietaryFiber"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Dietary fiber"
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              {" "}
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.protein}
                  name="protein"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Protein"
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.salt}
                  name="salt"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Salt"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.origin}
                  name="origin"
                  onChange={(e) => changeHandler(e)}
                  placeholder="Origin"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  value={allValues.price}
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
              value={allValues.description}
              name="description"
              onChange={(e) => changeHandler(e)}
              as="textarea"
              rows={3}
              placeholder="Description"
            />
          </Form.Group>

          <Button
            onClick={(e) => submitForm(e)}
            variant="primary"
            type="submit"
            disabled={allFit()}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contacts;
