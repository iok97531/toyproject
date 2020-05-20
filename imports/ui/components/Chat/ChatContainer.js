import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import ChatPresenter from "./ChatPresenter.js";
import { Messages } from "../../../api/messages/messages.js";

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageText: "",
    };
  }

  render() {
    return (
      <ChatPresenter
        messages={this.props.messages}
        value={this.state.messageText}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }

  componentDidUpdate() {
    const chatScreen = document.querySelector(".chat-screen");
    if (chatScreen) {
      chatScreen.scrollTop = chatScreen.scrollHeight;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { messageText } = this.state;

    if (messageText === "") {
      return null;
    }
    Meteor.call("messages.create", messageText, (error) => {
      if (error) {
        console.log(error.reason);
      }
    });
    this.setState({ messageText: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
}

export default withTracker(() => {
  Meteor.subscribe("messages");
  return {
    messages: Messages.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(ChatContainer);
