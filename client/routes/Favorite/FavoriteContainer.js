import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import PostCard from "../../component/PostCard";
import { Posts } from "../../../imports/api/posts";

class FavoriteContainer extends React.Component {
  render() {
    if (!this.props.posts) {
      return null;
    }
    if (!this.props.posts.length) {
      return <p>No Favorite Posts</p>;
    }
    return (
      <div>
        {this.props.posts.map((post) => (
          <PostCard
            key={post._id}
            postId={post._id}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    );
  }
}

export default withTracker(() => {
  if (!Meteor.user()) {
    return null;
  }
  Meteor.subscribe("posts");
  posts = [];
  const favIds = Meteor.user().profile.favPostIds;
  for (i = 0; i < favIds.length; i++) {
    post = Posts.find({ _id: favIds[i] }).fetch()[0];
    if (post) {
      posts.push(post);
    }
  }
  return {
    posts,
  };
})(FavoriteContainer);
