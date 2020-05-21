import React from "react";
import UsersPresenter from "./UsersPresenter.js";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: null,
    };
  }

  render() {
    const { selectedUser } = this.state;
    return (
      <UsersPresenter
        selectedUser={selectedUser}
        handleClick={this.handleClick}
      />
    );
  }
  handleClick = (event) => {
    this.setState({
      selectedUser: Meteor.users.find(event.target.value).fetch()[0],
    });
  };
}

export default UsersContainer;
