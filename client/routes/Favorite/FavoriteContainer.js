import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import PostCard from "../../component/PostCard";
import { Posts } from "../../../imports/api/posts";
import Header from "../../component/Header";

class FavoriteContainer extends React.Component {
  render() {
    if (!this.props.posts) {
      return null;
    }
    if (!this.props.posts.length) {
      return (
        <div>
          <Header />
          <h1>No Favorite Posts</h1>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <h1>Favorite</h1>
        <div className={"post-card-container"}>
          {this.props.posts.map((post) => (
            <PostCard
              key={post._id}
              postId={post._id}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
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
