import React from "react";

const UserInfo = ({ selectedUser }) => {
  return (
    <div>
      <h2>User Info</h2>
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
            )}{" "}
          </div>
        ) : (
          <p>Select user</p>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
