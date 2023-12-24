import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent";

export default function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      bg="primary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="newspaper.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          NC News
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/topics">Topics</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="/users">{user}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
