import React from "react";
import CommentForm from "../../components/CommentForm";
import Comment from "../../components/Comment";
import Header from "../../components/Header";
import { Meteor } from "meteor/meteor";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const PostDetailPresenter = (props) => {
  if (!props.post) {
    return <p>error</p>;
  }
  const {
    isFavorite,
    onToggle,
    post: { _id: postId, title, description, image, content },
  } = props;

  return (
    <div>
      <Header />
      <div className={"post-page"}>
        <div className={"post-detail"}>
          <div onClick={onToggle}>
            {isFavorite ? (
              <AiFillHeart className={"favorite-icon"} size="30" />
            ) : (
              <AiOutlineHeart className={"favorite-icon"} size="30" />
            )}
          </div>
          <p className={"title"}>{title}</p>
          <p className={"description"}>{description}</p>
          <p>{image}</p>
          <p>{content}</p>
          <p>{Meteor.user().username}</p>
        </div>
        <div>
          <CommentForm postId={postId} />

          <div>
            {props.comments.map((comment) => (
              <Comment key={comment._id} content={comment.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPresenter;
