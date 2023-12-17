import React from "react";
import "./Nav.css";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  const linkStyle = { color: "rgb(190, 0, 44)" };

  return (
    <div className="nav-container">
      <Nav variant="underline">
        <Nav.Item>
          <Nav.Link href="/" style={linkStyle}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/topics" style={linkStyle}>
            Topics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/users" style={linkStyle}>
            Users
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
