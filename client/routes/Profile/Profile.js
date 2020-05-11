import { Meteor } from "meteor/meteor";
import React from "react";
import { withTracker } from "meteor/react-meteor-data";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.user.length) {
      return null;
    }
    const { username, emails, profile } = this.props.user[0];
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

export default withTracker(() => {
  return {
    user: Meteor.users.find(Meteor.userId()).fetch(),
  };
})(Profile);
