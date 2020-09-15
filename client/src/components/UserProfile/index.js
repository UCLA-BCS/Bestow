// This is where the uder profile code will go
import React from "react";
import { Form } from "semantic-ui-react";
import { Container, Row, Col } from "reactstrap";
import "./index.css";
import InputBox from "../InputBox";

const ProfileForm = (props) => {
  return (
    <Row>
      <Col md={6}>
        <img src="/images/Profile.png" className="ProfilePic" />
        <Form>
          <InputBox
           value={props.user.name}
            labelName="User Name"
            labelClassName="profileUserName"
            inputClassName="profileUserBox"
            placeHolder="Import User Name"
          />
        </Form>
      </Col>
      <Col md={6}>
        <Form>
          <InputBox
          value={props.user.firstName}
            labelName="First Name"
            labelClassName="profileFirstName"
            inputClassName="profileUserBox"
            placeHolder="Import User First Name"
          />

          <InputBox
          value={props.user.lastName}
            labelName="Last Name"
            labelClassName="lastName"
            inputClassName="profileUserBox"
            placeHolder="Import User Last Name"
          />

          <InputBox
          value={props.user.allergies}
            labelName="Allergies"
            labelClassName="lastName"
            inputClassName="profileUserBox"
            placeHolder="List User Allergies"
          />

          <InputBox
          value={props.user.dietaryRestrictions}
            labelName="Dietary Restrictions"
            labelClassName="lastName"
            inputClassName="profileUserBox"
            placeHolder="List User Dietary Restrictions"
          />
        </Form>
      </Col>
    </Row>
  );
};

export default ProfileForm;
