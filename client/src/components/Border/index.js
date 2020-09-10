import React from "react";
import { Container, Row, Col } from "reactstrap";

function Border (props) {
    return(

      <Container className="container1">
      <Container className="container2">
          {props.children}
      </Container>
      </Container>
    )
}

export default Border