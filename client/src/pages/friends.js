// this is where the frinds list code will go
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Border from "../components/Border";
import ProfileForm from "../components/UserProfile";
import DropdownExampleSelection from"../components/FriendsProfile";

function Friends (props) {
    return(
<Border >
          <Row></Row>
          <p>Friends List</p>

          <DropdownExampleSelection />
       </Border>
    )
    }
    
    export default Friends