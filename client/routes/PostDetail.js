import React from "react";
import PostDetailPresenter from "./PostDetailPresenter";
import { Meteor } from "meteor/meteor";
import { Posts } from "../../imports/api/posts";
import { Comments } from "../../imports/api/comments";
import { withTracker } from "meteor/react-meteor-data";

class PostDetail extends React.Component {
  handleToggleFav = (event) => {};

  render() {
    return (
      <PostDetailPresenter
        post={this.props.post}
        comments={this.props.comments}
        onClick={this.handleToggleFav}
      />
    );
  }
}

export default withTracker((props) => {
  const { postId } = props.match.params;
  const postHandle = Meteor.subscribe("post", postId);
  const loading = postHandle.ready();

  const commentsHandle = Meteor.subscribe("comments");

  return {
    loading,
    post: Posts.find().fetch()[0],
    comments: Comments.find().fetch(),
  };
})(PostDetail);
