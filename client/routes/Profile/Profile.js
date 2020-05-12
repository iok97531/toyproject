import { Meteor } from "meteor/meteor";
import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Button } from "semantic-ui-react";

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
        <Button onClick={this.handleClick}>LogOut</Button>
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
