import React from "react";
import PostDetailPresenter from "./PostDetailPresenter";
import { Meteor } from "meteor/meteor";
import { Posts } from "../../../api/posts/posts";
import { Comments } from "../../../api/comments/comments";
import { withTracker } from "meteor/react-meteor-data";

class PostDetailContainer extends React.Component {
  render() {
    const { post, comments, isFavorite } = this.props;

    return (
      <PostDetailPresenter
        post={post}
        comments={comments}
        isFavorite={isFavorite}
        onToggle={this.handleToggleFavorite}
      />
    );
  }

  handleToggleFavorite = () => {
    const { post } = this.props;
    Meteor.call("users.toggleFavorite", post._id, (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result) {
        console.log(result);
      }
    });
  };
}

export default withTracker((props) => {
  const { postId } = props.match.params;
  Meteor.subscribe("post", postId);
  Meteor.subscribe("comments");

  let isFavorite;
  if (Meteor.user()) {
    isFavorite = Meteor.user().profile.favoritePosts.indexOf(postId) !== -1;
  } else {
    isFavorite = false;
  }
  return {
    post: Posts.find({ _id: postId }).fetch()[0],
    comments: Comments.find({ postId }).fetch(),
    isFavorite,
  };
})(PostDetailContainer);
