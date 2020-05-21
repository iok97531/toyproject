import React from "react";
import CommentPresenter from "./CommentPresenter.js";

class CommentContainer extends React.Component {
  render() {
    const { userName, createdAt, content } = this.props;
    return (
      <CommentPresenter
        userName={userName}
        createdAt={createdAt}
        content={content}
        handleDelete={this.handleDelete}
      />
    );
  }

  handleDelete = () => {
    const { commentId, userId } = this.props;

    if (userId !== Meteor.userId()) {
      console.log("You are not authorized");
      return null;
    }
    Meteor.call("comments.delete", commentId, (error) => {
      if (error) {
        console.log(error);
      }
    });
  };
}

export default CommentContainer;
