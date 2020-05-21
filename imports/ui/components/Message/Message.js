import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Message = ({ messageText, userId, createdAt }) => {
  if (userId === Meteor.userId()) {
    return (
      <div className={"my-message"}>
        <FaUserCircle className={"user-icon"} size="35" />
        <p>{messageText}</p>
        <span>{`${createdAt.getHours()}:${createdAt.getMinutes()}`}</span>
      </div>
    );
  } else {
    return (
      <div className={"others-message"}>
        <FaUserCircle className={"user-icon"} size="35" />
        <p>{messageText}</p>
        <span>{`${createdAt.getHours()}:${createdAt.getMinutes()}`}</span>
      </div>
    );
  }
};

export default Message;
