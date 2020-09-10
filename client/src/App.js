import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/home"
import Login from"./pages/login";
import Register from"./pages/register";
import Friends from"./pages/friends";

function App() {
  return (
    <Router>
      <Header />
      {window.location.pathname.includes("/home") || window.location.pathname.includes("/friends") ? <NavBar />:"" }
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/friends" component={Friends} />
    </Router>
  );
}

export default App;
