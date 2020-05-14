import React from "react";

const CommentPresenter = (props) => {
  console.log(props);
  return (
    <div>
      <p>name</p>
      <p>{props.content}</p>
    </div>
  );
};

export default CommentPresenter;
