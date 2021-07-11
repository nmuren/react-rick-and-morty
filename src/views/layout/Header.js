import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "assets/img/logo.png";

const Header = () => (
  <Container fluid>
    <Row className="logo-container">
      <Col className="my-4">
        <img src={logo} alt="logo" />
      </Col>
    </Row>
  </Container>
);
export default Header;
