// This is where the uder profile code will go
import React from "react";
import { Form} from 'semantic-ui-react'
import { Container, Row, Col } from "reactstrap";
import "./index.css"
import InputBox from "../InputBox";

const ProfileForm = (props) => {
    return(
        
        <Row>
            <Col md={6}>
            <img src="/images/Profile.png" className="ProfilePic" />   
            </Col>
            <Col md={6}>
        <Form>
            <InputBox labelName="User Name" labelClassName="userName" inputClassName="userBox" placeHolder="User"/>

        {/* <Form.Field>
            <label className="userName">User Name</label>
            <input className="userBox" placeholder='User' />
        </Form.Field> */}
        <InputBox labelName="First & Last Name" labelClassName="firstName" inputClassName="userBox" placeHolder="Users First and Last Name" />
        {/* <Form.Field>
            <label className="firstName">First & Last Name</label>
            <input className="userBox" placeholder='Users First and Last Name' />
        </Form.Field> */}
        {/* <Form.Field>
            <Checkbox label='Enter your changes to your profile then hit submit to update' />
        </Form.Field>
        <Button type='submit'>Update Profile</Button> */}
        </Form>
        </Col>
        </Row>
    );
};

  
  export default ProfileForm