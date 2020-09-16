import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/home"
import Login from"./pages/login";
import Register from"./pages/register";
import Friends from"./pages/friends";
import Favourite from"./pages/favourite";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      {window.location.pathname.includes("/home") || window.location.pathname.includes("/friends") || window.location.pathname.includes("/favourite") ? <NavBar />:"" }
      <Route exact path="/" component={Register} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/favourite" component={Favourite} />
      <Route exact path="/friends" component={Friends} />
      <Footer />
    </Router>
  );
}

export default App;
