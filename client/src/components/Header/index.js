import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import "./index.css";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <Row>
          <Col md={12}>
            <Row>
              <Col md={2}>
                <img src="/images/logo_v2.svg" className="img-responsive" />
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Create Account</Link> |{" "} */}
      </div>
    </>
  );
};

export default Header;
