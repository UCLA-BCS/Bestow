import React from "react";
import { Container, Row, Col } from "reactstrap";
import Border from "../components/Border";
import ProfileForm from "../components/UserProfile";

function Home(props) {
  return (
    <Border>
      <ProfileForm />
    </Border>
  );
}

export default Home;
