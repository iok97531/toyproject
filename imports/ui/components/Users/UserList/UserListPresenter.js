import React from "react";

const UserListPresenter = ({ users, filterText, handleClick }) => {
  return (
    <div className="user-list">
      {users.map((user) => {
        if (user.username.indexOf(filterText) === -1) {
          return null;
        }
        return (
          <button key={user._id} value={user._id} onClick={handleClick}>
            {user.username}
          </button>
        );
      })}
    </div>
  );
};

export default UserListPresenter;
