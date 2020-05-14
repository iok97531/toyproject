import React from "react";
import { Link } from "react-router-dom";

class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/posts/${this.props.postId}`}>
        <div className={"post-card"}>
          <p className={"title"}>{this.props.title}</p>
          <p className={"description"}>{this.props.description}</p>
          <div>
            <span>♥</span>
            <span>0</span>
            <span>💬</span>
            <span>0</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default PostCard;
