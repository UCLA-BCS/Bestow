import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import OneTest from "./one.js";
import TwoTest from "./two.js";
import "../../assets/css/dashboard.css";

const DashboardPage = (props) => {
  return (
    <div className="alert alert-primary">
      <p>Dashboard Page</p>
      <Router>
        <Link to="/">First</Link>
        <Link to="/second">Second</Link>
        <Route path="/" exact component={OneTest} />
        <Route path="/second" component={TwoTest} />
      </Router>
    </div>
  );
};

export default DashboardPage;
