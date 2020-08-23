import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavComponent from "./components/navbar";
import SplashPage from "./pages/splash";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Route path="/" exact component={SplashPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </div>
    </Router>
  );
}

export default App;
