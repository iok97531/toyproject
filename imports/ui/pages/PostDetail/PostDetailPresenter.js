import React from "react";
import CommentForm from "../../components/CommentForm";
import Comment from "../../components/Comment";
import { Meteor } from "meteor/meteor";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const PostDetailPresenter = (props) => {
  if (props.post === undefined) {
    return null;
  }
  const {
    isFavorite,
    onToggle,
    post: { _id: postId, title, description, image, content },
  } = props;

  return (
    <div>
      <div className={"post-page"}>
        <div className={"post-detail"}>
          {Meteor.userId() ? (
            <div onClick={onToggle}>
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
        </div>
        <div className={"comments"}>
          <CommentForm postId={postId} />

          <div>
            {props.comments.map((comment) => (
              <Comment
                key={comment._id}
                userName={comment.userName}
                content={comment.content}
                createdAt={comment.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPresenter;
