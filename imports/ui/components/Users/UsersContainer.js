import React from "react";
import UsersPresenter from "./UsersPresenter.js";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: null,
      filterText: "",
    };
  }

  render() {
    const { selectedUser, filterText } = this.state;
    return (
      <UsersPresenter
        selectedUser={selectedUser}
        filterText={filterText}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
      />
    );
  }

  handleClick = (event) => {
    this.setState({
      selectedUser: Meteor.users.find(event.target.value).fetch()[0],
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
}

export default UsersContainer;
