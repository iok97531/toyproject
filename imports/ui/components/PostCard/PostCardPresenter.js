import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";

const PostCardPresenter = ({
  postId,
  title,
  description,
  numLikes,
  numComments,
}) => {
  if (title) {
    return (
      <Link to={`/posts/${postId}`}>
        <div className={"post-card"}>
          <p className={"card__title"}>{title}</p>
          <p className={"card__description"}>{description}</p>
          <div>
            <AiFillHeart className={"card__icon"} />
            <span>{numLikes}</span>
            <BsFillChatDotsFill className={"card__icon"} />
            <span>{numComments}</span>
          </div>
        </div>
      </Link>
    );
  } else {
    return null;
  }
};

export default PostCardPresenter;
