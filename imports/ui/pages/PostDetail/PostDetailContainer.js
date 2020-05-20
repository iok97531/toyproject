import React from "react";
import PostDetailPresenter from "./PostDetailPresenter";
import { Meteor } from "meteor/meteor";
import { Posts } from "../../../api/posts/posts";
import { Comments } from "../../../api/comments/comments";
import { withTracker } from "meteor/react-meteor-data";

class PostDetailContainer extends React.Component {
  render() {
    const { post, comments, isFavorite } = this.props;
    if (!post) {
      this.props.history.push("/");
    }
    return (
      <PostDetailPresenter
        post={post}
        comments={comments}
        isFavorite={isFavorite}
        handleDelete={this.handleDelete}
        handleToggleFavorite={this.handleToggleFavorite}
      />
    );
  }

  handleDelete = () => {
    const { post } = this.props;
    if (post.userId !== Meteor.userId()) {
      console.log("You are not authorized");
      return null;
    }
    Meteor.call("posts.delete", post._id, (error) => {
      if (error) {
        console.log(error);
      } else {
        this.props.history.push("/");
      }
    });
  };

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
