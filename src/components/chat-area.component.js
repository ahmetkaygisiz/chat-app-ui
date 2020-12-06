import React, { Component } from "react";
import SockJsClient from "react-stomp";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import "./chat-area.component.css";

class ChatArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typedMessage: "",
      name: "test",
    };
  }

  setName = (name) => {
    console.log(name);
    this.setState({ name: name });
  };

  sendMessage = () => {
    this.clientRef.sendMessage(
      "/app/user-all",
      JSON.stringify({
        name: this.state.name,
        message: this.state.typedMessage,
      })
    );
  };

  displayMessages = () => {
    return (
      <div>
        {this.state.messages.map((msg) => {
          return (
            <div>
              <label className="username-label">{msg.name}</label>
              <p className="speech-bubble">{msg.message}</p>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="w-100 chat-header">
            <h2>
              <b>Chat Header</b>
            </h2>
          </div>
          <div className="chat-body w-100 p-3">{this.displayMessages()}</div>
          <div className="input-group ">
            <TextField
              className="w-80"
              id="outlined-basic"
              label="Enter Message to Send"
              variant="outlined"
              onChange={(event) => {
                this.setState({ typedMessage: event.target.value });
              }}
            />
            <div className="input-group-append">
              <Button
                variant="contained"
                color="primary"
                onClick={this.sendMessage}
              >
                Send
              </Button>
            </div>
          </div>
        </div>

        <SockJsClient
          url="/websocket-chat/"
          topics={["/topic/user"]}
          onConnect={() => {
            console.log("connected");
          }}
          onDisconnect={() => {
            console.log("Disconnected");
          }}
          onMessage={(msg) => {
            var jobs = this.state.messages;
            jobs.push(msg);
            this.setState({ messages: jobs });
            console.log(this.state);
          }}
          ref={(client) => {
            this.clientRef = client;
          }}
        />
      </div>
    );
  }
}

export default ChatArea;
