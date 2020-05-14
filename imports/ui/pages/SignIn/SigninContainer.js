import React from "react";
import SignInPresenter from "./SignInPresenter.js";

class SignInContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      password: undefined,
    };
  }

  render() {
    return (
      <SignInPresenter
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { user, password } = this.state;

    if (!user) {
      console.log("Name or email is required.");
      return;
    }
    if (!password) {
      console.log("Password is required.");
      return;
    }

    Meteor.loginWithPassword(user, password, (error, result) => {
      if (error) {
        console.log(error.reason);
      }
      if (result) {
        console.log(result);
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "") {
      this.setState({
        [name]: undefined,
      });
    }
    this.setState({
      [name]: value,
    });
  };
}

export default SignInContainer;
