import React from "react";
import Border from "../components/Border";
import InputBox from "../components/InputBox";
import { Form } from "semantic-ui-react";
import { Container, Row, Col } from "reactstrap";
import "../components/InputBox/index.css";
import API from "../utils/API";

class Register extends Component {
  State = {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    allergies: "",
    dietaryRestrictions: "",
  };
  handelInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    const userReg = {
      name: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      allergies: this.state.allergies,
      dietaryRestrictions: this.state.diestaryRestrictions,
    };
    API.resgister(userREg).then((results) => {
      console.log(results);
      window.location.href = "/home";
    });
  };
  render() {
    return (
      <Border>
        <Row>
          {/* <Col sm="12" md="size: 6, offset: 3">
          <Col sm="12" col sm="12" col-md="6" offset-md="3">
            Register
          </Col> */}

          <Col md={6}>
            Register
            <Form>
              <InputBox
                value={this.state.userName}
                name="userName"
                handleInputChange={this.handleInputChange}
                labelName="User Name"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="Import User Name"
              />
              <InputBox
                labelName="First Name"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="User's First Name"
              />
              <InputBox
                labelName="Last Name"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="User's Last Name"
              />

              <InputBox
                labelName="Password"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="Enter a Password Here"
              />
              <InputBox
                labelName="Allergies"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="Enter any Allergies"
              />
              <InputBox
                labelName="Dietary Restrictions"
                labelClassName="firstName"
                inputClassName="userBox"
                placeHolder="Enter any Dietary Restrictions"
              />
            </Form>
          </Col>
        </Row>
      </Border>
    );
  }
}
export default Register;
