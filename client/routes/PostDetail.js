import React from "react";
import PostDetailPresenter from "./PostDetailPresenter";
import { Meteor } from "meteor/meteor";
import { Posts } from "../../imports/api/posts";
import { withTracker } from "meteor/react-meteor-data";

class PostDetail extends React.Component {
  handleToggleFav = (event) => {};

  handleCommentSubmit = (event) => {
    Meteor.call("comments.create", event.target.value);
  };

  render() {
    return (
      <PostDetailPresenter
        post={this.props.post}
        onSubmit={this.handleCommentSubmit}
        onClick={this.handleToggleFav}
      />
    );
  }
}

export default withTracker((props) => {
  const { postId } = props.match.params;
  const postHandle = Meteor.subscribe("post", postId);
  const loading = postHandle.ready();

  return {
    loading,
    post: Posts.find().fetch()[0],
  };
})(PostDetail);
