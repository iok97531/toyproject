import React from "react";

const CommentFormPresenter = (props) => (
  <form onSubmit={props.onSubmit}>
    <input type="text" name="text" onChange={props.onChange} />
    <input type="submit" name="submit" />
  </form>
);

export default CommentFormPresenter;
