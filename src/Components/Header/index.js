import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../Config/firebase";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  const log_out = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <Navbar bg="light" expand="lg">
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
              NewProduct <i class="bi bi-plus-lg"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/Account">
              Account
            </Nav.Link>
            <Nav.Link style = {{color:"red"}} onClick={log_out}><i className="bi bi-box-arrow-left icon"></i>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
