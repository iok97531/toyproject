import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import CommentPresenter from "./CommentPresenter.js";

const CommentContainer = withTracker((props) => {
  user = Meteor.users.find({}).fetch();
  console.log(user);
  return {
    user,
    content: props.content,
  };
})(CommentPresenter);

export default CommentContainer;
