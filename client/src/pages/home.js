import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Border from "../components/Border";
import ProfileForm from "../components/UserProfile";
import API from "../utils/API";

class Home extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    console.log("status")

    API.getCurrentUser().then(user => {
      console.log(user)
      if (user.data === "unauthorized") {
        window.location.href = "/"
      } else {
        this.setState({
          user: user.data
        })
      }

    })
  }
  render() {
    return (
      <Border>
        {console.log(this.state.user)}
        <ProfileForm user={this.state.user} />
      </Border>
    );
  }

}

export default Home;
