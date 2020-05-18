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
          <p className={"card__title"}>{this.props.title}</p>
          <p className={"card__description"}>{this.props.description}</p>
          <div>
            <AiFillHeart className={"card__icon"} />
            <span>0</span>
            <BsFillChatDotsFill className={"card__icon"} />
            <span>0</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default PostCard;
