import React from "react";
import UserList from "./UserList";
import UserInfo from "./UserInfo";
import SearchBar from "./SearchBar";

const UsersPresenter = ({
  selectedUser,
  filterText,
  handleChange,
  handleClick,
}) => {
  return (
    <div className="user-container">
      <h2>User Info</h2>
      <UserInfo selectedUser={selectedUser} />
      <div className="user-filter">
        <SearchBar handleChange={handleChange} />
        <UserList filterText={filterText} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default UsersPresenter;
