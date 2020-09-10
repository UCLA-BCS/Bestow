import React from "react"
import { Container, Row, Col } from "reactstrap";
import UserCard from "../UserCard";

function NavBar (props) {
 return (
    <Container className="container0">
    <Row>
      <Col md={2} className="padding-0">
        <UserCard  pathimage="/images/button1.png" />
        </Col>
        <Col md={2} className="padding-0">
        <UserCard  pathimage="/images/button2.png" />
        </Col>
        <Col md={2} className="padding-0">
        <UserCard  pathimage="/images/button3.png" />
      </Col>
    </Row>
    </Container>
 
 )
}
export default NavBar 
