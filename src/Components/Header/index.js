import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../Config/firebase";
import { Navbar, Container, Nav, NavDropdown, Col, Button, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import "./Header.css";
import CartCardComponent from "../CartCardsComponent";
import axios from "axios";
import bakerShopHeader from "../../logo/bakerShopHeader.png";
import bakerShopHeaderText from "../../logo/bakerShopHeaderText.png";

const Header = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const [useDelete, setUseDelete] = useState(1);
  const [useTotalAmount,setTotalAmount] = useState(0);
  //const [useTotalPrice,setTotalPrice] = useState(0);
  let totalPrice = 0;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const keys = Object.keys(localStorage);


  const totalAmount = () => {
    let amount = 0;
    keys.map(function (key) {
      let item = JSON.parse(localStorage.getItem(key));
      amount += parseInt(item.amount);
    });
    setTotalAmount(amount) 
  }


  const soldProducts = () => {
    keys.map(function (key) {
      let item = JSON.parse(localStorage.getItem(key));
        axios
          .put(`http://localhost:5000/api/Product/updateSold/${item._id}/${item.amount}`)
          
    });
  }
  const deleteProducts = (name) => {
    if (window.confirm("Do you really want to delete?")) {
      localStorage.removeItem(name)
      setUseDelete(useDelete + 1);      
    }
    
  };
  

  const log_out = (e) => {
    e.preventDefault();
    logout();
  };

  useEffect(() => {
    totalAmount();
  }, [useDelete,keys]);
  return (
    <Navbar className="headerColor" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
          <img src={bakerShopHeader} height={50} width={70} />
          <img src={bakerShopHeaderText} height={30} width={100} />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Products/flour">
                Flour
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Products/salt">
                Salt
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Products/yeast">
                Yeast
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Products/bread">
                Bread
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/NewProduct">
              NewProduct <i className="bi bi-plus-lg"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/ProductDemand">
              ProductDemand
            </Nav.Link>
            <Nav.Link className="cartShopping" onClick={handleShow}>
              <i class="bi bi-cart3"></i>
              <Badge bg="dark">{useTotalAmount}</Badge>
            </Nav.Link>
            <Offcanvas
              placement="end"
              scroll="true"
              enforceFocus="false"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title>My shopping cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {keys.map(function (key) {
                  let item = JSON.parse(localStorage.getItem(key));
                  {totalPrice=totalPrice+(item.price*item.amount)}
                  return (
                    <Col sm key={item._id} className="mt-4">
                      {" "}
                      <Button
                        name={item.name}
                        onClick={(e) => deleteProducts(item.name)}
                        className="DeleteButtonCart"
                      ><i class="bi bi-trash"></i></Button>
                      <CartCardComponent
                        id={item._id}
                        image={item.image}
                        title={item.name}
                        text={item.weight}
                        price={item.price}
                        amount={item.amount}
                      />
                      
                    </Col>
                  );
                })}
                <Row><h3 className="finalPrice mt-4 mb-4">TOTAL<span className="price">{totalPrice.toFixed(2)}€</span></h3></Row>
                <Button as={Link} to="/PaymentGateway" onClick={soldProducts} className="primaryButton">PROCESS ORDER</Button>
                
              </Offcanvas.Body>
            </Offcanvas>

            <NavDropdown
              title="Foto de la cuenta"
              id="basic-nav-dropdown"
              className="userInfo"
            >
              <NavDropdown.Item as={Link} to="/Account">
                Account
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/MyProducts">
                MyProducts
              </NavDropdown.Item>
              <NavDropdown.Item style={{ color: "red" }} onClick={log_out}>
                <i className="bi bi-box-arrow-left icon"></i>Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
