import React from "react";
import { Link } from "react-router-dom";

class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/posts/${this.props.postId}`}>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </Link>
    );
  }
}

export default PostCard;
