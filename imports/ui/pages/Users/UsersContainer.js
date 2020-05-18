import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import UsersPresenter from "./UsersPresenter.js";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: null,
    };
  }

  handleClick = (event) => {
    this.setState({
      selectedUser: Meteor.users.find(event.target.value).fetch()[0],
    });
  };

  render() {
    const { users } = this.props;
    const { selectedUser } = this.state;

    return (
      <UsersPresenter
        users={users}
        selectedUser={selectedUser}
        handleClick={this.handleClick}
      />
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    users: Meteor.users.find().fetch(),
  };
})(UsersContainer);
