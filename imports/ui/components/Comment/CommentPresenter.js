import React from "react";
import { FiX } from "react-icons/fi";

const CommentPresenter = ({ userName, createdAt, content, handleDelete }) => {
  return (
    <div className={"comment"}>
      <FiX onClick={handleDelete} size={"20"} />
      <p>{userName}</p>
      <p>{createdAt.toDateString()}</p>
      <p>{content}</p>
    </div>
  );
};

export default CommentPresenter;
