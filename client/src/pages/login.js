import React, {Component} from "react";
import Border from "../components/Border";
import InputBox from "../components/InputBox";
import { Form } from "semantic-ui-react";
import { Container, Row, Col } from "reactstrap";
import ButtonUi from "../components/Button";
import API from "../utils/API"
// import "../components/InputBox/index.css";

class Login extends Component {
    state={
        userName:"",
        password:""

    }
   handleInputChange=event => {
       const {name,value}=event.target
       this.setState({
           [name]:value
       })
       console.log([name],value)
   }
   handleSubmit=event =>{
       const userInfo={
        name:this.state.userName,
        password:this.state.password
       }
       API.logIn(userInfo).then(results=>{
           console.log(results)
           if(results.data.includes("error") ){
             alert("Invalid username/password. Try again.")
            }
            else {
              window.location.href="/home"
             
           }          
          
       })
    }
  render() {
    return (
      <Border>
        <Row>
          <Col md={6}>
            Login
            <Form>
              <InputBox
                value={this.state.userName}
                name="userName"
                handleInputChange={this.handleInputChange}
                labelName="User Name"
                labelClassName="userName"
                inputClassName="userBox"
                placeHolder="User Name"
              />
              <InputBox
              type = "password"
              value={this.state.password}
              name="password"
              handleInputChange={this.handleInputChange}
                labelName="Password"
                labelClassName="userName"
                inputClassName="userBox"
                placeHolder="Password"
              />
              <ButtonUi color="black" text="Sign In" handleSubmit={this.handleSubmit}/>
            </Form>
          </Col>
        </Row>
      </Border>
    );
  }
}
export default Login;
