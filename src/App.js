import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component.js";
import RoomList from "./components/room-list.component.js";
import ChatArea from "./components/chat-area.component";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid main-container">
          <div className="row">
            <div className="col-md-3 list-area">
              <h3 className="list-header">Rooms</h3>
              <RoomList />
            </div>
            <div className="col-md-9 chat-area">
              <ChatArea />
            </div>
          </div>
        </div>
        <footer>
          {" "}
          © 2020 Copyright: <b>Bahadır Gül</b>
          <i> and </i>
          <b>Ahmet Kaygisiz</b>
        </footer>
      </div>
    );
  }
}

export default App;
