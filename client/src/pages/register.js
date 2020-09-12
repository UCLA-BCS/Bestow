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
            <Col md={6}>
            Register
            <Form>
            <InputBox labelName="First Last Name" labelClassName="firstName" inputClassName="userBox" placeHolder="Users First and Last Name" />
           
 

            </Form>
            </Col>
            </Row>
        </Border>
    )
}
export default Register
