import React from "react";
import { Link } from "react-router-dom";

const NavComponent = (props) => {
  return (
    <div className="navbar">
      <p>
        Bestow Temp Navbar ----> (<Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Create Account</Link> )
      </p>
    </div>
  );
};

export default NavComponent;
