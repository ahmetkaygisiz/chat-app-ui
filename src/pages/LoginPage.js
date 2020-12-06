import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar.component.js";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>LoginPage</p>
      </div>
    );
  }
}

export default LoginPage;
