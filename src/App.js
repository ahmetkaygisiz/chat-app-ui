import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <div className="container">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/chat" component={ChatPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
