import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";

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
            <AiFillHeart />
            <span>0</span>
            <BsFillChatDotsFill />
            <span>0</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default PostCard;
