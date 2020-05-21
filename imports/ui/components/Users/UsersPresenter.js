import React from "react";
import UserInfo from "./UserInfo";
import UserFilter from "./UserFilter";

const UsersPresenter = ({ selectedUser, handleClick }) => {
  return (
    <div className="user-container">
      <UserFilter handleClick={handleClick} />
      <UserInfo selectedUser={selectedUser} />
    </div>
  );
};

export default UsersPresenter;
