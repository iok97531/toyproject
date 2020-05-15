import React from "react";

const Message = ({ text, userId }) => {
  if (userId === Meteor.userId()) {
    return <p className={"my-message"}>{text}</p>;
  } else {
    return <p className={"others-message"}>{text}</p>;
  }
};

export default Message;
