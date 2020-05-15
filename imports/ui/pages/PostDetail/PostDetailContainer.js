import React from "react";
import PostDetailPresenter from "./PostDetailPresenter";
import { Meteor } from "meteor/meteor";
import { Posts } from "../../../api/posts/posts";
import { Comments } from "../../../api/comments/comments";
import { withTracker } from "meteor/react-meteor-data";

class PostDetailContainer extends React.Component {
  handleToggleFav = () => {
    Meteor.call("users.toggleFav", this.props.post._id, (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result) {
        console.log(result);
      }
    });
  };

  render() {
    return (
      <PostDetailPresenter
        post={this.props.post}
        comments={this.props.comments}
        onToggle={this.handleToggleFav}
        isFavorite={this.props.isFavorite}
      />
    );
  }
}

export default withTracker((props) => {
  const { postId } = props.match.params;
  Meteor.subscribe("post", postId);
  Meteor.subscribe("comments");

  let isFavorite;
  if (Meteor.user()) {
    isFavorite = Meteor.user().profile.favPostIds.indexOf(postId) !== -1;
  } else {
    isFavorite = false;
  }
  return {
    post: Posts.find({ _id: postId }).fetch()[0],
    comments: Comments.find({ postId }).fetch(),
    isFavorite,
  };
})(PostDetailContainer);
