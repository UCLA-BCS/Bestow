// this is where the frinds list code will go
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import API from "../utils/API";
import Border from "../components/Border";
import ProfileForm from "../components/UserProfile";
import FriendSelection from "../components/FriendsProfile";
import InputBox from "../components/InputBox"


function Friends (props) {
 
    return (
        <Border>
            <Row>
                <Col md={6}>
                <h1 className="friendsH" >Friends List</h1>
                <FriendSelection />
                <InputBox  
                labelName="Find Friends"
            labelClassName="findFriends"
            inputClassName="friendUserBox"
            placeHolder="Friends Name"/>

                </Col>
                <Col md={6}>
                <img src="/images/friend.png" className="friendPic" />
                </Col>
                    
            </Row>
        </Border>
    );
};

export default Friends;