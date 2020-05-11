import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

import FavoritePresenter from "./FavoritePresenter";
import PostCard from "../../component/PostCard";
import { Posts } from "../../../imports/api/posts";

class FavoriteContainer extends React.Component {
  render() {
    console.log(this.props.posts);
    if (!this.props.posts) {
      return null;
    }
    if (!this.props.posts.length) {
      return <p>No Favorite Posts</p>;
    }
    return (
      <div>
        {this.props.posts.map((post) => (
          <PostCard title={post.title} description={post.description} />
        ))}
      </div>
    );
  }
}

export default withTracker(() => {
  if (!Meteor.user()) {
    return null;
  }
  // Favorite fixing
  return {
    posts: Meteor.user().profile.favPostIds.map((postId) => {
      Posts.find({ _id: postId }).fetch()[0];
    }),
  };
})(FavoriteContainer);
