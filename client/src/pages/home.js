import React from "react";
import { Container, Row, Col } from "reactstrap";
import Border from "../components/Border";
import ProfileForm from "../components/UserProfile";

function Home (props) {
    return(
<Border >
          <Row></Row>
          <p>Welcome to Bestow</p>
          <ProfileForm /> Uncomment to see User Profile in box. Working on
          setting up function
       </Border>
    )
    }
    
    export default Home