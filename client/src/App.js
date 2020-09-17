import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Friends from "./pages/friends";
import Favourite from "./pages/favourite";
import Footer from "./components/Footer";
import API from "./utils/API";

class App extends Component {
  state = {
    isLoggedIn: false,
  };
  componentDidMount() {
    API.getCurrentUser().then(user=>{
      if (user.data !="unauthorized"){
        this.setState({isLoggedIn:true})
      }
    })
  }
  render() {
    return (
      <Router>
        <Header />
        {window.location.pathname.includes("/home") ||
        window.location.pathname.includes("/friends") ||
        window.location.pathname.includes("/favourite") ? (
          <NavBar />
        ) : (
          ""
        )}
        <Route exact path="/" component={Register} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={this.state.isLoggedIn ? Home : Register } />
        <Route exact path="/favourite" component={this.state.isLoggedIn ? Favourite : Register } />
        <Route exact path="/friends" component={this.state.isLoggedIn ? Friends : Register } />
        <Footer />
      </Router>
    );
  }
}

export default App;
