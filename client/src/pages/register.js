import React, { Component } from "react";
import Border from "../components/Border";
import InputBox from "../components/InputBox";
import { Form } from "semantic-ui-react";
import { Container, Row, Col, Button } from "reactstrap";
import "../components/InputBox/index.css";
import API from "../utils/API";
import ButtonUi from "../components/Button"
class Register extends Component {
  state = {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    allergies: "",
    dietaryRestrictions: "",
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(value)
  };
  handleSubmit = (event) => {
    const userReg = {
      name: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      allergies: this.state.allergies,
      dietaryRestrictions: this.state.dietaryRestrictions,
    };
    API.signUp(userReg).then((results) => {
      console.log(results);
      window.location.href = "/home";
    });
  };
  render() {
    return (
      <Border>
          <Row>
              <Col md={6} className="text-center">
                  <h1 className="welcome">Welcome to Bestow!</h1>
                  
                  This helpful app remembers your favorite coffee drinks, restaurants, and snacks so you don’t have to. It also provides the users to connect so you will always remember what your friends and family enjoy.
                  <h4 className="login">Already have an account?</h4>

                  <ButtonUi color="black" text="Login" handleSubmit={this.handleSubmit}/>
                  </Col>
        
          <Col md={6} className="text-center">
            <h3 className="register"> Register Here</h3>
            <Form>
              <InputBox
                value={this.state.userName}
                name="userName"
                handleInputChange={this.handleInputChange}
                labelName="User Name"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="User Name"
              />

              <InputBox
              value={this.state.firstName}
              name="firstName"
              handleInputChange={this.handleInputChange}
                labelName="First Name"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="User's First Name"
              />
              <InputBox
                value={this.state.lastName}
                name="lastName"
                handleInputChange={this.handleInputChange}
                labelName="Last Name"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="User's Last Name"
              />

              <InputBox
                value={this.state.password}
                name="password"
                handleInputChange={this.handleInputChange}
                labelName="Password"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="Enter a Password Here"
                type="password"
              />
              <InputBox
               value={this.state.allergies}
               name="allergies"
               handleInputChange={this.handleInputChange}
                labelName="Allergies"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="Enter any Allergies"
              />
              <InputBox
              value={this.state.dietaryRestrictions}
              name="dietaryRestrictions"
              handleInputChange={this.handleInputChange}
                labelName="Dietary Restrictions"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="Enter any Dietary Restrictions"
              />
              <ButtonUi color="black" text="Sign Up" handleSubmit={this.handleSubmit}/>
            </Form>
            </Col>
          
        </Row>
      </Border>
    );
  }
}
export default Register;
