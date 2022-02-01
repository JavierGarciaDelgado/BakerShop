import React,{useState} from "react";
import { Link } from "react-router-dom";
import { logout } from "../../Config/firebase";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas'
import Badge from 'react-bootstrap/Badge'
import "./Header.css";

const Header = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const log_out = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <Navbar className="headerColor" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            BakerShop
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
            <i class="bi bi-cart3"></i><Badge bg="dark">9</Badge>
            </Nav.Link>
            <Offcanvas placement="end" scroll="true" enforceFocus="false" show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>My shopping cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
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
