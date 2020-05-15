import React from "react";

const Comment = (props) => {
  return (
    <div className={"comment"}>
      <p>{props.userName}</p>
      <p>{props.createdAt.toDateString()}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default Comment;
