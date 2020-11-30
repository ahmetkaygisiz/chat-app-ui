import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./chat-area.component.css";

class ChatArea extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="w-100 p-3 chat-header">
            <h2>
              <b>Chat Header</b>
            </h2>
          </div>
          <div className="chat-body">
            <div>
              <p className="speech-bubble">Helloogggg sadfasdfasf </p>
              <p className="speech-bubble">Helloogggg sadfasdfasf </p>
              <p className="speech-bubble">Helloogggg sadfasdfasf </p>
              <p className="speech-bubble">Helloogggg sadfasdfasf </p>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type something stupid"
              aria-label="Type something stupid"
              aria-describedby="basic-addon2"
            ></input>
            <div className="input-group-append">
              <button className="btn btn-danger">Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatArea;
