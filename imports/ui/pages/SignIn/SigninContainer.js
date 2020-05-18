import React from "react";
import SignInPresenter from "./SignInPresenter.js";

class SignInContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
      errorMessage: "",
    };
  }

  render() {
    const { user, password, errorMessage } = this.state;
    const disabled = user === "" || password === "";
    return (
      <SignInPresenter
        disabled={disabled}
        errorMessage={errorMessage}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { user, password } = this.state;

    if (user === "") {
      console.log("Name or email is required.");
      return null;
    }
    if (password === "") {
      console.log("Password is required.");
      return null;
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

    this.setState({
      [name]: value,
    });
  };
}

export default SignInContainer;
