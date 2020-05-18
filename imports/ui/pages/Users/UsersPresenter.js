import React from "react";

const UsersPresenter = ({ users, selectedUser, handleClick }) => {
  return (
    <div>
      <div className="user-data">
        {selectedUser ? (
          <div>
            <p>{selectedUser.username}</p>
            {Meteor.userId() ? (
              <div>
                <p>{selectedUser.emails[0].address}</p>
                <p>{selectedUser.profile.phoneNumber}</p>
              </div>
            ) : (
              <p>Sign in please!</p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="user-list">
        {users.map((user) => (
          <option key={user._id} value={user._id} onClick={handleClick}>
            {user.username}
          </option>
        ))}
      </div>
    </div>
  );
};

export default UsersPresenter;
