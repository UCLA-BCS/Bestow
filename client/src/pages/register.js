import React from "react"
 import Border from"../components/Border";
import InputBox from"../components/InputBox";
import { Form} from 'semantic-ui-react';
import { Container, Row, Col } from "reactstrap";
import "../components/InputBox/index.css";
function Register (props) {
    return(
        <Border>
            <Row>
            
            <Col sm="12" md="size: 6, offset: 3" ><Col sm= "12"col sm="12" col-md="6" offset-md="3">
            Register</Col>
            {/* <Form> */}
            <InputBox labelName="First Name" labelClassName="firstName" inputClassName="userBox" placeHolder="User's First Name" />
            <InputBox labelName="Last Name" labelClassName="firstName" inputClassName="userBox" placeHolder="User's Last Name" />
            
            <InputBox labelName="Food Allergies" labelClassName="firstName" inputClassName="userBox" placeHolder="Food Allergies" />
            <InputBox labelName="First Last Name" labelClassName="firstName" inputClassName="userBox" placeHolder="Users First and Last Name" />
            <InputBox labelName="Dietary Restrictions" labelClassName="firstName" inputClassName="userBox" placeHolder="Dietary Restrictions" />
           
 

            {/* </Form> */}
            </Col>
            </Row>
        </Border>
    )
}
export default Register
