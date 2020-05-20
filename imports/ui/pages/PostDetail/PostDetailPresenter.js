import React from "react";
import CommentForm from "../../components/CommentForm";
import Comment from "../../components/Comment";
import { Meteor } from "meteor/meteor";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const PostDetailPresenter = (props) => {
  if (props.post === undefined) {
    return null;
  }
  const {
    isFavorite,
    handleDelete,
    handleToggleFavorite,
    post: { _id: postId, title, description, image, content, userName },
  } = props;

  return (
    <div>
      <div className={"post-page"}>
        <div className={"post-detail"}>
          <FiX className={"delete-icon"} onClick={handleDelete} size={"30"} />
          {Meteor.userId() ? (
            <div onClick={handleToggleFavorite}>
              {isFavorite ? (
                <AiFillHeart className={"favorite-icon"} size="30" />
              ) : (
                <AiOutlineHeart className={"favorite-icon"} size="30" />
              )}
            </div>
          ) : null}
          <p className={"title"}>{title}</p>
          <p className={"description"}>{description}</p>
          <p>{image}</p>
          <p>{content}</p>
          <p>{userName}</p>
        </div>
        <div className={"comments"}>
          <CommentForm postId={postId} />

          <div>
            {props.comments.map((comment) => (
              <Comment
                key={comment._id}
                commentId={comment._id}
                userId={comment.userId}
                userName={comment.userName}
                createdAt={comment.createdAt}
                content={comment.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPresenter;
