import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar.component.js";
class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>HomePage</p>
      </div>
    );
  }
}

export default HomePage;
