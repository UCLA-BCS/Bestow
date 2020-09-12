import React from "react"
import { Container, Row, Col } from "reactstrap";
import UserCard from "../UserCard";
import { Link } from "react-router-dom";

function NavBar (props) {
 return (
    <Container className="container0">
    <Row>
      <Col md={2} className="padding-0">
          <Link to = "/home">
          <UserCard  pathimage="/images/button1.png" />
          </Link>
        </Col>
        <Col md={2} className="padding-0">
          <Link to = "/favourite">
          <UserCard  pathimage="/images/button2.png" />
          </Link>
        </Col>

        <Col md={2} className="padding-0">
          <Link to = "/friends">
          <UserCard  pathimage="/images/button3.png" />
          </Link>
      </Col>
    </Row>
    </Container>
 
 )
}
export default NavBar 
