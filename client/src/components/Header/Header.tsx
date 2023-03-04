import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid className="justify-content-end">
          <Navbar.Toggle aria-controls="navbarScroll" className="" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav className="me-0 my-2 my-lg-0 " navbarScroll>
              <Nav.Link to="/" as={NavLink} end>
                All Images
              </Nav.Link>

              <Nav.Link to="/add-image" as={NavLink}>
                Add Image
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
