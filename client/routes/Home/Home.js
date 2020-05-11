import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../imports/api/posts";
import { Meteor } from "meteor/meteor";
import PostCard from "../../component/PostCard";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPostCards() {
    const { posts } = this.props;
    if (!posts.length) {
      return <p>No Post</p>;
    }

    return this.props.posts.map((post) => (
      <PostCard
        key={post._id}
        postId={post._id}
        title={post.title}
        image={post.image}
        description={post.description}
      />
    ));
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>{this.renderPostCards()}</div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("posts");
  return {
    posts: Posts.find({}).fetch(),
  };
})(Home);
