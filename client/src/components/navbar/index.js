import React from "react";
import { Link } from "react-router-dom";
import {Row, Col} from "reactstrap"
import "./index.css"
import { Button } from '@material-ui/core';

const NavComponent = (props) => {
  return( 
  
  
  <>

  
  <div className="navbar header">

<Row>
  <Col md={6}>
    <img src="/images/logo_v2.svg" className="img-responsive"  />  
  
  </Col>
</Row>

      
        {/* <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Create Account</Link> |{" "} */}
    </div>

    </>
  );
};

export default NavComponent;
