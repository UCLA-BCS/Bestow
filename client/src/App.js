import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavComponent from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <p>This shows up on every page</p>
        {/* <Route path="/" exact component={SplashPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/register" component={RegisterPage} /> */}
      </div>
    </Router>
  );
}

export default App;
