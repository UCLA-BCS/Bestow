// this is where the frinds list code will go
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import API from "../utils/API";
import Border from "../components/Border";
import ProfileForm from "../components/UserProfile";
import DropdownExampleSelection from "../components/FriendsProfile";



class Friends extends Component {

    componentDidMount() {
        API.getCurrentUser()
        .then(user =>{
             console.log(user.data)
             if (user.data === "unauthorized") {
                 window.location.href = "/"
             } else {
                 //loadfriends
             }
        })
     }
 

    render() {

        return (
            <Border >
                <Row></Row>
                <p>Friends List</p>

                <DropdownExampleSelection />
            </Border>
        )

    }
}

export default Friends