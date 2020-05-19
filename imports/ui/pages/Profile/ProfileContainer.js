import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import ProfilePresenter from "./ProfilePresenter.js";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    };
  }

  render() {
    return (
      <ProfilePresenter
        user={this.props.user}
        handleChange={this.handleChange}
        handleUpdate={this.handleUpdate}
        handleLogOut={this.handleLogOut}
      />
    );
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleUpdate = (event) => {
    event.preventDefault();
    const { password, confirmPassword, phoneNumber } = this.state;

    if (
      password === "" &&
      confirmPassword === "" &&
      (phoneNumber === "" ||
        phoneNumber === this.props.user.profile.phoneNumber)
    ) {
      console.log("Update require more than 1 field.");
      return null;
    }

    if (password !== confirmPassword) {
      console.log("Password match error");
      return null;
    }

    Meteor.call("users.update", password, phoneNumber, (error) => {
      if (error) {
        console.log(error.reason);
      } else {
        console.log("Profile updated");
        this.props.history.push("/");
      }
    });
  };

  handleLogOut = () => {
    Meteor.logout();
  };
}

export default withTracker(() => {
  return {
    user: Meteor.user(),
  };
})(ProfileContainer);
