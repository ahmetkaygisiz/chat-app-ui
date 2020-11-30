import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Home
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Link 1
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Link 2
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

export default Navbar;
