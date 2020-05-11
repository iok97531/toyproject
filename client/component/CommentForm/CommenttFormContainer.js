import React from "react";
import { Meteor } from "meteor/meteor";
import CommentFormPresenter from "./CommentFormPresenter";

class CommentFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <CommentFormPresenter
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { text } = this.state;
    const { postId } = this.props;

    Meteor.call("comments.create", text, postId, (error) => {
      if (error) {
        console.log(error);
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
}

export default CommentFormContainer;
