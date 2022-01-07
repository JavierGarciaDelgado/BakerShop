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
        <Navbar.Brand><Nav.Link as={Link} to="/">BakerShop</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="subenlace" to="/Salt/harina">Flour</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="subenlace" to="/Salt/salt">Salt</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Contacts">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/Account">Account</Nav.Link>
            <Nav.Link onClick={log_out}>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
