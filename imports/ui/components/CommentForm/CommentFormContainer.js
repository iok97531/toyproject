import React from "react";
import { Meteor } from "meteor/meteor";
import CommentFormPresenter from "./CommentFormPresenter";

class CommentFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: "",
    };
  }

  render() {
    return (
      <CommentFormPresenter
        value={this.state.commentText}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { commentText } = this.state;
    const { postId } = this.props;

    Meteor.call("comments.create", commentText, postId, (error) => {
      if (error) {
        console.log(error);
      }
      this.setState({
        commentText: "",
      });
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
