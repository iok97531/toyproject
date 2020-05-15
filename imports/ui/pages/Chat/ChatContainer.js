import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import ChatPresenter from "./ChatPresenter.js";
import { Messages } from "../../../api/messages/messages.js";

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: undefined,
    };
  }

  render() {
    return (
      <ChatPresenter
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        messages={this.props.messages}
      />
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { text } = this.state;

    Meteor.call("messages.create", text, (error) => {
      if (error) {
        console.log(error.reason);
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "") {
      this.setState({
        [name]: undefined,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
}

export default withTracker(() => {
  Meteor.subscribe("messages");

  return {
    messages: Messages.find({}, { sort: { createAt: -1 } }).fetch(),
  };
})(ChatContainer);
