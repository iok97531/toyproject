import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts";
import { Meteor } from "meteor/meteor";
import PostCard from "../../components/PostCard";
import Header from "../../components/Header";

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
        <Header />
        <div className={"user-container"}>
          <div className={"user-list"}>user list</div>
          <div className={"user-data"}>user data</div>
          <div className={"chat"}>chat</div>
        </div>
        <div className={"post-card-container"}>{this.renderPostCards()}</div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("posts");
  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(Home);
