import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RemoveBtn(props) {
  return (
    <Row>
      <Col md={3}>
      
        <img src="/images/removebutton.svg" className="deletebtn" role="button" tabIndex="0" onClick={() => props.removebtn(props.id)}/>
      </Col>
    </Row>
  );
}

export default RemoveBtn;