import React from "react";

const UserInfo = ({ selectedUser }) => {
  return (
    <div>
      <h2>User Info</h2>
      <div className="user-info">
        {selectedUser ? (
          <div>
            <p>{selectedUser.username}</p>
            {Meteor.userId() ? (
              <div>
                <p>{selectedUser.emails[0].address}</p>
                <p>{selectedUser.profile.phoneNumber}</p>
              </div>
            ) : (
              <p>Please sign in!</p>
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
