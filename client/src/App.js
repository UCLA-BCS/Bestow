import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavComponent from "./components/navbar";
import { Container, Row, Col } from "reactstrap";
import UserCard from "./components/UserCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Row>
          <Col md={12}>
            <NavComponent />
          </Col>
        </Row>
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
        <Container className= "container1">
          <Container className="container2">
          <Row>
            
          </Row>
          {/* THis is where the different components will go ex. Login, Register, UserProfile,  */}
          <p>Welcome to Bestow</p>
          
        </Container>
        </Container>
      </div>
    </Router>
  );
}

export default App;
