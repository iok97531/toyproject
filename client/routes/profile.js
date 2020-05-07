import { Meteor } from "meteor/meteor";
import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: Meteor.user() };
  }

  render() {
    const { username, emails, profile } = this.state.user;
    return (
      <div>
        <p>Profile</p>
        <p>{emails[0].address}</p>
        <p>{username}</p>
        <p>{profile.phonenumber}</p>
        <button onClick={this.handleClick}>LogOut</button>
      </div>
    );
  }

  handleClick = () => {
    Meteor.logout();
  };
}

export default Profile;
